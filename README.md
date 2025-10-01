# The Flow Co. IV+O2 Website

A modern, professional website for The Flow Co. IV+O2, a concierge integrative medical practice in Mesa, Arizona. Built with Next.js 15, React 19, and TypeScript.

## 🏥 About The Practice

The Flow Co. IV+O2 is a concierge integrative medical practice specializing in:
- Natural cancer treatment
- Autoimmune support
- Hormone balancing
- Hyperbaric oxygen therapy
- IV therapies
- Advanced integrative treatments

**Location:** 560 West Brown Road, Mesa, AZ 85201  
**Phone:** 480-292-8602

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📋 Project Status

### ✅ Completed Features

- Modern, responsive design with sage green theme
- Home page with comprehensive content
- Team page with practitioner profiles
- Membership information page
- Book online page
- Treatment pages:
  - Natural Cancer Treatment
  - Autoimmunity
  - Hormone Testing & Balancing
  - Hyperbaric Oxygen
  - EBOO Therapy
  - Vitamin C Therapy
  - PEMF Therapy
  - Long Covid
- Responsive navigation with mobile menu
- Professional header and footer
- Contact information throughout

### ⚠️ Known Issues (See AUDIT_REPORT.md)

**CRITICAL - Blocking Production Deployment:**
- ❌ 24 build errors (unescaped entities in JSX)
- ❌ 1 parsing error in Header-old.tsx
- ❌ 41 warnings (unused imports)

**HIGH PRIORITY:**
- ❌ 3 missing treatment pages (Methylene Blue, Mistletoe, Rife Therapy)
- ❌ Missing Articles page (listed in navigation)
- ❌ Missing legal pages (Privacy Policy, Accessibility)
- ❌ No functional online booking system
- ❌ Missing SEO optimization (structured data, Open Graph tags)

**See AUDIT_REPORT.md for complete analysis and recommendations**

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4
- **UI Library:** React 19.1.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono

## 📁 Project Structure

```
flowco-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── book-online/       # Booking page
│   │   ├── membership/        # Membership page
│   │   ├── team/              # Team page
│   │   └── treatments/        # Treatment pages
│   ├── components/            # React components
│   │   ├── Header.tsx         # Site header
│   │   ├── Footer.tsx         # Site footer
│   │   └── ui/                # shadcn/ui components
│   └── lib/                   # Utility functions
├── public/                    # Static assets
│   └── images/               # Image files
├── AUDIT_REPORT.md           # Comprehensive website audit
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette (Sage Green Theme)

The website uses a custom sage green color palette for a natural, calming medical aesthetic:

- **sage-50 to sage-950:** Full range of sage green shades
- **Primary Actions:** sage-600
- **Text:** sage-700 to sage-900
- **Backgrounds:** sage-50 to sage-100

### Typography

- **Headings:** Geist Sans (bold weights)
- **Body:** Geist Sans (regular weights)
- **Code/Mono:** Geist Mono

## 📊 Audit Summary

**Overall Score:** 7.5/10

- **Design:** 8.5/10 ✅
- **Content:** 8/10 ✅
- **Technical:** 6/10 ⚠️
- **SEO:** 6.5/10 ⚠️
- **Accessibility:** 7/10 ⚠️

**See AUDIT_REPORT.md for detailed findings and recommendations**

## 🔧 Immediate Action Items

### Critical (Before Launch)

1. Fix 24 JSX unescaped entity errors
2. Fix or remove Header-old.tsx
3. Remove 41 unused imports
4. Create 3 missing treatment pages
5. Add legal pages (Privacy Policy, Terms, HIPAA Notice)

### High Priority

6. Create or remove Articles section
7. Add SEO enhancements (structured data, Open Graph)
8. Set up Google Analytics
9. Implement functional booking system
10. Add contact form

**Estimated time to launch-ready:** 9-13 hours

## 📱 Pages

### Public Pages

- `/` - Home
- `/team` - Meet the team
- `/membership` - Membership information
- `/book-online` - Consultation booking
- `/treatments` - All treatments overview

### Treatment Pages

- `/treatments/natural-cancer` - Natural Cancer Treatment
- `/treatments/autoimmunity` - Autoimmunity Support
- `/treatments/hormone-testing` - Hormone Testing & Balancing
- `/treatments/hyperbaric-oxygen` - Hyperbaric Oxygen Therapy
- `/treatments/eboo-therapy` - EBOO Therapy
- `/treatments/vitamin-c` - Vitamin C IV Therapy
- `/treatments/pemf` - PEMF Therapy
- `/treatments/long-covid` - Long Covid Treatment

### Missing Pages (Need Creation)

- `/treatments/methylene-blue` ❌
- `/treatments/mistletoe` ❌
- `/treatments/rife` ❌
- `/articles` ❌
- `/privacy-policy` ❌
- `/accessibility` ❌

## 🚀 Deployment

### Prerequisites

1. Fix all critical build errors
2. Complete missing pages
3. Add legal pages
4. Set up environment variables (if needed)

### Recommended Platforms

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

### Deployment Steps

```bash
# 1. Fix all build errors
npm run build  # Must succeed with no errors

# 2. Test production build locally
npm run build && npm start

# 3. Deploy to Vercel
# Connect GitHub repo to Vercel
# Or use Vercel CLI:
vercel --prod
```

## 📈 Analytics & Tracking (To Be Added)

- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Google Search Console
- [ ] Meta Pixel (if using Facebook ads)
- [ ] Conversion tracking

## 🔒 Security & Compliance

### Required for Medical Practice

- [ ] HIPAA-compliant Privacy Policy
- [ ] HIPAA Notice of Privacy Practices
- [ ] Terms of Service
- [ ] Medical disclaimers on treatment pages
- [ ] Cookie consent (if using analytics)
- [ ] SSL certificate (HTTPS)

## 🎯 SEO Recommendations

1. Add structured data (LocalBusiness, MedicalBusiness)
2. Create XML sitemap
3. Add Open Graph meta tags
4. Add Twitter Card meta tags
5. Optimize meta descriptions
6. Add breadcrumb navigation with schema
7. Create content-rich articles/blog
8. Optimize images with alt text

## 📝 Content Guidelines

- Medical information should include appropriate disclaimers
- Treatment descriptions should not make unsubstantiated claims
- Include FDA disclaimers where applicable
- Cite sources for medical claims
- Maintain professional, trustworthy tone

## 🤝 Contributing

This is a private project for The Flow Co. IV+O2. For updates or changes, contact the development team.

## 📞 Support & Contact

**The Flow Co. IV+O2**  
560 West Brown Road  
Mesa, AZ 85201-3221  
Phone: 480-292-8602  
Email: info@theflowcoaz.com

## 📄 License

Private and proprietary. All rights reserved by The Flow Co. IV+O2.

---

**Last Updated:** October 1, 2025  
**Audit Date:** October 1, 2025  
**Next Review:** After critical fixes are implemented
