# Softrinx: Software Development Agency Website
## Streamlined Architecture & Implementation Blueprint

---

## 🎯 Project Overview

**Project Name:** Softrinx  
**Type:** Software development agency portfolio  
**Purpose:** High-converting website that positions Softrinx as the go-to agency for premium digital solutions  
**Differentiator:** Interactive, modern, actually different from typical agency sites  
**Audience:** Fortune 500, venture-backed startups, enterprises  
**Goal:** Client conversion, top 3 keyword rankings, establish authority

---

## 🏗 Tech Stack

```
Frontend:
✓ Next.js 16+ (App Router, no src folder)
✓ React 19 + TypeScript
✓ Tailwind CSS 4 (main styling)
✓ Sass/SCSS (animations, variables - no layout shifts)
✓ Lucide React (icons)
✓ Recharts (dashboards)
✓ React Hook Form + Zod (validation)

Backend:
✓ Appwrite (Database, Auth, Functions)
✓ Resend (Email)
✓ Node.js (Appwrite Functions)

DevOps:
✓ Vercel (hosting)
✓ GitHub (version control)
✓ GitHub Actions (CI/CD)

Analytics:
✓ Next.js built-in SEO
✓ PostHog (analytics)
```

---

## 📁 Project Structure

```
softrinx/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── portfolio/
│   │   ├── case-studies/
│   │   └── team/
│   ├── videos/
│   └── icons/
├── app/
│   ├── (root)/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home page
│   │   └── globals.css
│   ├── (pages)/
│   │   ├── layout.tsx
│   │   ├── services/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── portfolio/[id]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   └── contact/page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   ├── quote/route.ts
│   │   └── webhooks/appwrite/route.ts
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── About.tsx
│   │   ├── ContactForm.tsx
│   │   └── Stats.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Modal.tsx
│   └── interactive/
│       ├── ServiceDemo.tsx
│       ├── QuoteCalculator.tsx
│       ├── ProjectFilter.tsx
│       └── ScrollAnimation.tsx
├── lib/
│   ├── appwrite.ts
│   ├── seo.ts
│   ├── validation.ts
│   └── constants.ts
├── hooks/
│   ├── useAppwrite.ts
│   └── useInView.ts
├── services/
│   ├── portfolio.ts
│   ├── contact.ts
│   └── leads.ts
├── types/
│   ├── portfolio.ts
│   └── contact.ts
├── styles/
│   ├── globals.scss
│   ├── animations.scss
│   └── variables.scss
├── .env.local
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Quick Start

### 1. Create Project

```bash
npx create-next-app@latest softrinx --typescript --tailwind
cd softrinx
```

### 2. Generate Full File Structure

Save this as `setup.sh` in your project root and run:

```bash
chmod +x setup.sh
./setup.sh
```

Or copy the setup script from the repo and run it.

### 3. Install Dependencies

```bash
npm install lucide-react framer-motion react-hook-form zod recharts appwrite
```

### 4. Set Up Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_api_key

RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
```

### 5. Start Development

```bash
npm run dev
```

Open `http://localhost:3000`

---

## 🎨 Core Components (What Actually Matters)

### Must-Have Components

**Layout (3)**
- `Header` – Nav + branding
- `Footer` – Links + contact
- `Navigation` – Mobile nav

**Sections (7)**
- `Hero` – Headline + CTA + animated gradient
- `Services` – Cards with descriptions
- `Portfolio` – Grid + filters
- `CaseStudies` – Metrics showcase
- `About` – Team + story
- `ContactForm` – Lead capture
- `Stats` – Agency metrics

**Interactive (4)**
- `ServiceDemo` – Swipeable/interactive showcases per service
- `QuoteCalculator` – Service + features → price/timeline
- `ProjectFilter` – Filter by tech/industry
- `ScrollAnimation` – Scroll-triggered animations (Sass-based)

**UI (5)**
- `Button` – CTA, sizes
- `Input` – Forms
- `Card` – Reusable wrapper
- `Badge` – Tags
- `Modal` – Dialogs

---

## 🔧 Appwrite Backend Setup

### Collections

```typescript
// Leads
{
  id: string
  name: string
  email: string
  company: string
  service: string
  budget: string
  timeline: string
  message: string
  status: 'new' | 'contacted' | 'qualified'
  created_at: datetime
}

// Portfolio
{
  id: string
  title: string
  description: string
  image: string
  video?: string
  tech_stack: string[]
  industry: string
  client: string
  results: string
  featured: boolean
}

// CaseStudies
{
  id: string
  portfolio_id: string
  challenge: string
  solution: string
  metrics: { label, value }[]
  testimonial: string
  testimonial_author: string
  testimonial_role: string
}

// BlogPosts
{
  id: string
  title: string
  slug: string
  content: string (markdown)
  excerpt: string
  published_at: datetime
  image: string
}
```

### Functions (3)

```typescript
// send-email: Contact form → confirmation + admin notification
// generate-quote: Calculator → PDF quote + email
// contact-webhook: Real-time lead notification
```

---

## 💡 Styling Approach

**Tailwind CSS** – Main styling for layout, spacing, colors, responsive design

**Sass/SCSS** – Animations, transitions, variables to prevent layout shifts

```scss
// Example: animations.scss
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
}
```

This way you get smooth animations without Framer Motion layout shifts.

---

## 🎯 Key Features

| Page | Key Feature |
|------|---|
| **Home** | Hero + Services overview + CTA |
| **Services** | Service cards with interactive demos |
| **Portfolio** | Grid with filters + individual project pages |
| **Case Studies** | Animated metrics, testimonials, results |
| **About** | Team profiles, company story |
| **Contact** | Form + Quote calculator |
| **Blog** | SEO-optimized thought leadership |

---

## 🚀 What Makes It Stand Out

1. **Service Demos** – Interactive mini-apps showing what you build
2. **Quote Calculator** – Instant pricing removes friction
3. **Real Case Studies** – Actual metrics, not fluff
4. **Premium Animations** – Sass-based, smooth, no layout shifts
5. **Appwrite Integration** – Shows you can build complex systems
6. **Mobile-First** – Perfect on all devices
7. **SEO-Optimized** – Ranks for your services
8. **Fast** – Next.js + Vercel CDN

---

## 🎯 Implementation Phases

### Phase 1: Foundation (Week 1)
- Project structure setup
- Configure Appwrite
- Build layout components (Header, Footer, Nav)
- Deploy skeleton to Vercel

### Phase 2: Core Pages (Week 2-3)
- Home page with Hero
- Services page
- Portfolio page + individual project pages
- About page
- Contact page with form

### Phase 3: Interactivity (Week 4)
- Sass animations
- Service demos
- Quote calculator
- Portfolio filters
- Appwrite integration

### Phase 4: Polish (Week 5)
- SEO optimization
- Performance tuning
- Content creation
- Testing & launch

---

## 🚀 Deployment

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Vercel auto-deploys on push
# Or manually:
vercel deploy --prod
```

---

**Built by Softrinx – Software Development Agency**