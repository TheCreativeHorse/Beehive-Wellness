# Deployment Guide - Beehive Wellness Landing Page

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Beehive Wellness landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/beehive-wellness.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

## Manual Deployment

### Build for Production
```bash
npm run build
```

### Test Production Build Locally
```bash
npm start
```

### Deploy to Other Platforms

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Set build command: `npm run build`
4. Set publish directory: `.next`

#### AWS Amplify
1. Connect GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

## Environment Variables (Optional)

Create `.env.local` for production:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_PHONE=437-430-2442
NEXT_PUBLIC_EMAIL=info@beehivewellness.ca
```

## Post-Deployment Checklist

- [ ] Test booking form submission
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Test phone number links
- [ ] Verify SEO metadata
- [ ] Check Google Analytics (if added)
- [ ] Test page speed with PageSpeed Insights
- [ ] Verify SSL certificate
- [ ] Test contact forms
- [ ] Check social media links

## Google Ads Integration

1. **Set up Google Ads account**
2. **Create conversion tracking:**
   - Phone calls (437-430-2442)
   - Form submissions
3. **Add tracking codes to layout.tsx**
4. **Set up Google Analytics 4**

## Performance Monitoring

- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Set up uptime monitoring
- Track conversion rates

## Maintenance

- Update content regularly
- Monitor form submissions
- Check for broken links
- Update team photos as needed
- Review and update testimonials
