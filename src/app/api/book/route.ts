import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'thecreativehorse7@gmail.com',
    pass: process.env.EMAIL_PASS || 'your_app_password_here'
  }
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, location, time } = body;

    // Validate required fields
    if (!name || !phone || !service || !location || !time) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    const bookingId = `BW-${Date.now()}`;
    const timestamp = new Date().toISOString();
    
    // Convert time to 12-hour format with AM/PM
    const formatTime = (time24: string) => {
      const [hours, minutes] = time24.split(':');
      const hour = parseInt(hours);
      const period = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${hour12}:${minutes} ${period}`;
    };

    // Log the booking
    console.log('New booking received:', {
      name,
      phone,
      service,
      location,
      time,
      bookingId,
      timestamp,
    });

    // Send email notification
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'thecreativehorse7@gmail.com',
        to: process.env.BOOKING_NOTIFICATION_EMAIL || 'thecreativehorse7@gmail.com',
        subject: `🐝 New Booking Request - ${service}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #FCD34D; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .header h1 { margin: 0; color: #1F2937; }
                .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .booking-details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
                .detail-row { margin: 10px 0; padding: 10px; border-bottom: 1px solid #e5e7eb; }
                .detail-label { font-weight: bold; color: #4b5563; display: inline-block; width: 120px; }
                .detail-value { color: #1f2937; }
                .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🐝 New Booking Request</h1>
                </div>
                <div class="content">
                  <p>You have received a new booking request from your Beehive Wellness website:</p>
                  
                  <div class="booking-details">
                    <div class="detail-row">
                      <span class="detail-label">Booking ID:</span>
                      <span class="detail-value">${bookingId}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Name:</span>
                      <span class="detail-value">${name}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Phone:</span>
                      <span class="detail-value">${phone}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Service:</span>
                      <span class="detail-value">${service}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Location:</span>
                      <span class="detail-value">${location.charAt(0).toUpperCase() + location.slice(1)}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Time:</span>
                      <span class="detail-value">${formatTime(time)}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Received:</span>
                      <span class="detail-value">${new Date(timestamp).toLocaleString()}</span>
                    </div>
                  </div>

                  <p style="margin-top: 20px;">
                    <strong>Next Steps:</strong><br>
                    Please contact the client at <strong>${phone}</strong> to confirm their appointment.
                  </p>
                </div>
                <div class="footer">
                  <p>This email was sent from your Beehive Wellness booking system.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      };

      const emailResponse = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', emailResponse);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue with booking even if email fails
    }

    // Return success response
    return NextResponse.json(
      { 
        message: 'Booking request received successfully',
        bookingId,
        status: 'pending'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
