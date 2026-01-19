# Orbit Marketing, Inc. - Recruitment Website

A modern, high-converting recruitment website built with Next.js and Tailwind CSS, featuring a space-themed design.

## 🚀 Features

- **Modern Design**: Space-themed UI with starry background animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD schema
- **Accessibility**: WCAG-compliant markup with proper labels and keyboard navigation
- **Application Form**: Complete form with validation and file upload support
- **Legal Pages**: Privacy Policy and Terms of Service
- **Production Ready**: Configured for immediate Vercel deployment

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
orbitmarketinginc/
├── app/
│   ├── api/
│   │   └── submit-application/
│   │       └── route.ts          # API route for form submissions
│   ├── privacy-policy/
│   │   └── page.tsx              # Privacy Policy page
│   ├── terms-of-service/
│   │   └── page.tsx              # Terms of Service page
│   ├── globals.css               # Global styles with starry background
│   ├── layout.tsx                # Root layout with SEO metadata
│   └── page.tsx                  # Main homepage
├── components/
│   ├── About.tsx                 # About section component
│   ├── ApplicationForm.tsx       # Application form component
│   ├── FeaturedOpportunities.tsx # Job categories section
│   ├── Footer.tsx                # Footer component
│   ├── Hero.tsx                  # Hero section component
│   └── HowItWorks.tsx            # Process explanation section
├── package.json
├── tailwind.config.ts            # Tailwind configuration
└── next.config.js                # Next.js configuration
```

## 🔧 Configuration

### Email/CRM Integration

The form submission API route (`app/api/submit-application/route.ts`) currently logs application data to the console. To enable email notifications or CRM integration:

1. **Email Service** (Recommended: Resend, SendGrid, or Nodemailer):
   - Install your preferred email service package
   - Add API keys to environment variables
   - Uncomment and configure the email sending code in `route.ts`

2. **CRM Integration** (HubSpot, Salesforce, etc.):
   - Install the CRM SDK
   - Add API credentials to environment variables
   - Implement the `submitToCRM()` function

### Environment Variables

Create a `.env.local` file for sensitive configuration:

```env
# Email Service (example)
RESEND_API_KEY=your_api_key_here

# Or CRM Integration
CRM_API_KEY=your_crm_key_here
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to modify the space-themed color palette:

```typescript
colors: {
  space: {
    dark: "#0a0e27",
    navy: "#1a1f3a",
    // ... customize colors here
  },
}
```

### Content

All company-specific content is clearly marked with comments. Key files to update:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - Company description
- `components/FeaturedOpportunities.tsx` - Job categories
- `app/layout.tsx` - SEO metadata and JSON-LD schema

### Logo

Replace the placeholder logo in `components/Hero.tsx`:
- Remove the placeholder div
- Add your logo image to `public/` directory
- Update the image source

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Manual Build

```bash
npm run build
npm start
```

## 📝 TODO Items

- [ ] Replace placeholder logo with actual company logo
- [ ] Update contact information (phone, email)
- [ ] Configure email service or CRM integration in API route
- [ ] Review and customize Privacy Policy and Terms of Service
- [ ] Add Google Analytics or tracking (if needed)
- [ ] Set up custom domain (if applicable)

## 🔒 Compliance

The website includes:
- Privacy Policy page
- Terms of Service page
- Compliance disclaimers in footer
- No employment guarantees language

## 📄 License

Copyright © 2024 Orbit Marketing, Inc. All rights reserved.

## 🆘 Support

For questions or issues, contact: contact@orbitmarketinginc.org