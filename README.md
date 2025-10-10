# Beehive Wellness Landing Page

A responsive lead-generation landing page for Beehive Wellness, built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Lead Generation**: Booking form with API integration
- **SEO Optimized**: Complete metadata and LocalBusiness schema
- **Accessibility**: WCAG AA compliant with proper focus states
- **Performance**: Optimized images and lazy loading
- **Brand Compliant**: Uses official Beehive Wellness colors and fonts

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom brand colors
- **Icons**: Lucide React
- **Fonts**: Inter (headings) and Roboto (body)
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd beehive-wellness
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/book/          # Booking form API endpoint
│   ├── globals.css        # Global styles and brand colors
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main landing page
├── components/
│   ├── Header.tsx         # Sticky navigation header
│   ├── Hero.tsx           # Hero section with booking form
│   ├── SpecialOffer.tsx   # Promotional offer section
│   ├── Services.tsx       # Services overview
│   ├── WhyChooseUs.tsx    # Why choose us section
│   ├── Team.tsx           # Team members section
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── Locations.tsx      # Clinic locations
│   └── Footer.tsx         # Footer with links and contact
```

## Brand Colors

- **Pigment Blue**: #2E3192 (Primary)
- **Honey Gold**: #F5A623 (Accent)
- **Soft Lavender**: #C9C7F5 (Background)
- **Deep Charcoal**: #333333 (Text)
- **Sky Blue**: #4AAEFF (Hover states)
- **White**: #FFFFFF (Background)

## Key Features

### Booking Form
- Validates all required fields
- Submits to `/api/book` endpoint
- Shows success/error messages
- Resets form on successful submission

### Responsive Design
- Mobile-first approach
- Sticky header that shrinks on scroll
- Testimonials carousel on mobile, grid on desktop
- Optimized spacing for all screen sizes

### SEO & Accessibility
- Complete meta tags and Open Graph data
- LocalBusiness schema markup
- Semantic HTML structure
- WCAG AA color contrast compliance
- Focus states for keyboard navigation

### Performance
- Optimized images with Next.js Image component
- Lazy loading for non-critical content
- Font optimization with Google Fonts
- Minimal bundle size

## API Endpoints

### POST /api/book
Handles booking form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "437-430-2442",
  "service": "lung-therapy",
  "date": "2024-01-15",
  "time": "10:00"
}
```

**Response:**
```json
{
  "message": "Booking request received successfully",
  "bookingId": "BW-1234567890",
  "status": "pending"
}
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `.next` folder

## Customization

### Adding New Services
1. Update the `services` array in `Services.tsx`
2. Add corresponding option in the booking form dropdown
3. Update the LocalBusiness schema in `layout.tsx`

### Modifying Brand Colors
1. Update colors in `tailwind.config.ts`
2. Update CSS custom properties in `globals.css`
3. Test color contrast for accessibility

### Adding New Team Members
1. Add doctor photos to `public/images/`
2. Update the `teamMembers` array in `Team.tsx`
3. Update the LocalBusiness schema in `layout.tsx`

## Contact Information

- **Phone**: 437-430-2442
- **Email**: info@beehivewellness.ca
- **Brampton**: Unit #127, 40 Finchgate Blvd, Brampton, ON L6T 3H9
- **Scarborough**: Unit #210, 2130 Lawrence Ave E, Scarborough, ON M1R 3A6

## License

© 2024 Beehive Wellness. All rights reserved.