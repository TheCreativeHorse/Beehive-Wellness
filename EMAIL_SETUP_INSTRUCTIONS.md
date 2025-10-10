# Email Setup Instructions for Beehive Wellness

Your booking form is now configured to send email notifications to **thecreativehorse7@gmail.com** whenever someone submits a booking request.

## Quick Setup (5 minutes)

### Step 1: Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. Once logged in, go to [API Keys](https://resend.com/api-keys)
4. Click "Create API Key"
5. Give it a name like "Beehive Wellness Booking"
6. Copy the API key (it starts with `re_...`)

### Step 2: Add the API Key to Your Project

1. Open the `.env.local` file in the root of your project
2. Replace `your_resend_api_key_here` with your actual API key:

```
RESEND_API_KEY=re_your_actual_key_here
BOOKING_NOTIFICATION_EMAIL=thecreativehorse7@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

3. Save the file
4. Restart your development server:
   - Stop the current server (Ctrl+C in terminal)
   - Run `npm run dev` again

### Step 3: Test It Out

1. Go to your website at http://localhost:3000
2. Fill out the booking form
3. Submit it
4. Check **thecreativehorse7@gmail.com** for the booking notification email!

## What the Email Contains

Each booking notification email includes:
- 🐝 Beehive Wellness branding
- Booking ID
- Customer name
- Phone number
- Service requested
- Preferred date and time
- Timestamp of when the request was received

## Free Tier Limits

Resend's free tier includes:
- ✅ 3,000 emails per month
- ✅ 100 emails per day
- ✅ Perfect for a small to medium business

## Troubleshooting

### Email not arriving?
1. Check that your `RESEND_API_KEY` is correctly set in `.env.local`
2. Make sure you restarted the dev server after adding the API key
3. Check the terminal/console for any error messages
4. Verify the email in Resend dashboard under "Emails" tab

### Want to use your own domain?
With Resend, you can verify your own domain and send from addresses like `booking@beehivewellness.com`. See [Resend's domain documentation](https://resend.com/docs/dashboard/domains/introduction) for instructions.

## Support

If you need help, refer to:
- [Resend Documentation](https://resend.com/docs)
- [Resend Support](https://resend.com/support)

---

**Note:** The `.env.local` file is already excluded from git (in `.gitignore`), so your API key will remain private and secure.

