#!/bin/bash

# Softrinx Project Structure Setup
# For Next.js 16+ with app router
# Run this after: npx create-next-app@latest softrinx

echo "🧹 Cleaning up unnecessary route groups..."

# Remove route groups - they're not needed in Next.js 16
rm -rf "app/(root)" "app/(pages)" 2>/dev/null

echo "✨ Creating professional structure..."

# ============================================
# PUBLIC ASSETS
# ============================================
mkdir -p public/images/{hero,portfolio,case-studies,team}
mkdir -p public/videos
mkdir -p public/icons

# ============================================
# APP ROUTER - Clean & Professional
# ============================================
mkdir -p app/services
mkdir -p app/portfolio
mkdir -p "app/portfolio/[id]"
mkdir -p app/about
mkdir -p app/blog
mkdir -p "app/blog/[slug]"
mkdir -p app/contact
mkdir -p app/api/contact
mkdir -p app/api/quote
mkdir -p app/api/webhooks/appwrite

# ============================================
# COMPONENTS - Complete & Professional
# ============================================
mkdir -p components/layout
mkdir -p components/sections
mkdir -p components/ui
mkdir -p components/interactive

# ============================================
# LIB & CORE LOGIC
# ============================================
mkdir -p lib
mkdir -p hooks
mkdir -p services
mkdir -p types

# ============================================
# CREATE ROOT APP FILES
# ============================================

cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Softrinx - Premium Software Development Agency',
  description: 'Enterprise software solutions that drive results. Web apps, mobile apps, AI integration, and cloud infrastructure.',
  keywords: 'software development, web development, mobile apps, enterprise solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
EOF

cat > app/page.tsx << 'EOF'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import CaseStudies from '@/components/sections/CaseStudies'
import Stats from '@/components/sections/Stats'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <CaseStudies />
      <ContactForm />
    </main>
  )
}
EOF

# ============================================
# PAGE FILES
# ============================================
touch app/services/page.tsx
touch app/portfolio/page.tsx
touch "app/portfolio/[id]/page.tsx"
touch app/about/page.tsx
touch app/blog/page.tsx
touch "app/blog/[slug]/page.tsx"
touch app/contact/page.tsx

# ============================================
# API ROUTES
# ============================================
touch app/api/contact/route.ts
touch app/api/quote/route.ts
touch app/api/webhooks/appwrite/route.ts

# ============================================
# ERROR HANDLING
# ============================================
touch app/error.tsx
touch app/not-found.tsx

# ============================================
# LAYOUT COMPONENTS
# ============================================
touch components/layout/Header.tsx
touch components/layout/Footer.tsx
touch components/layout/Navigation.tsx

# ============================================
# SECTION COMPONENTS
# ============================================
touch components/sections/Hero.tsx
touch components/sections/Services.tsx
touch components/sections/Portfolio.tsx
touch components/sections/CaseStudies.tsx
touch components/sections/About.tsx
touch components/sections/ContactForm.tsx
touch components/sections/Stats.tsx

# ============================================
# UI COMPONENTS
# ============================================
touch components/ui/Button.tsx
touch components/ui/Input.tsx
touch components/ui/Card.tsx
touch components/ui/Badge.tsx
touch components/ui/Modal.tsx

# ============================================
# INTERACTIVE COMPONENTS
# ============================================
touch components/interactive/ServiceDemo.tsx
touch components/interactive/QuoteCalculator.tsx
touch components/interactive/ProjectFilter.tsx
touch components/interactive/ScrollAnimation.tsx

# ============================================
# LIB FILES
# ============================================
touch lib/appwrite.ts
touch lib/seo.ts
touch lib/validation.ts
touch lib/constants.ts

# ============================================
# HOOKS
# ============================================
touch hooks/useAppwrite.ts
touch hooks/useInView.ts

# ============================================
# SERVICES
# ============================================
touch services/portfolio.ts
touch services/contact.ts
touch services/leads.ts

# ============================================
# TYPES
# ============================================
touch types/portfolio.ts
touch types/contact.ts

# ============================================
# STYLES
# ============================================
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --secondary: 210 40% 96.1%;
    --accent: 210 40% 96.1%;
    --muted: 210 40% 96.1%;
    --radius: 0.5rem;
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --secondary: 217.2 32.6% 17.5%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
EOF

# ============================================
# CONFIG FILES
# ============================================

cat > .env.example << 'EOF'
# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
APPWRITE_API_KEY=

# Email
RESEND_API_KEY=

# Analytics (Optional)
NEXT_PUBLIC_POSTHOG_KEY=
EOF

touch .env.local

echo ""
echo "✅ Professional Softrinx structure created!"
echo ""
echo "📁 Structure:"
echo "   app/"
echo "   ├── layout.tsx            # Root layout with Header/Footer"
echo "   ├── page.tsx              # Home with all sections"
echo "   ├── globals.css           # Tailwind + custom styles"
echo "   ├── services/page.tsx"
echo "   ├── portfolio/"
echo "   │   ├── page.tsx"
echo "   │   └── [id]/page.tsx     # Dynamic project pages"
echo "   ├── about/page.tsx"
echo "   ├── blog/"
echo "   │   ├── page.tsx"
echo "   │   └── [slug]/page.tsx"
echo "   ├── contact/page.tsx"
echo "   └── api/                  # Contact, quote, webhooks"
echo ""
echo "   components/"
echo "   ├── layout/               # Header, Footer, Navigation"
echo "   ├── sections/             # Hero, Services, Portfolio, etc"
echo "   ├── ui/                   # Button, Card, Input, Badge, Modal"
echo "   └── interactive/          # ServiceDemo, QuoteCalculator, Filters"
echo ""
echo "   lib/                      # Appwrite, SEO, validation"
echo "   hooks/                    # Custom React hooks"
echo "   services/                 # API logic"
echo "   types/                    # TypeScript types"
echo ""
echo "🚀 Next steps:"
echo "   1. npm install lucide-react appwrite react-hook-form zod recharts"
echo "   2. Add your keys to .env.local"
echo "   3. npm run dev"
echo ""
echo "💼 This structure will get you clients. Build quality, ship fast."
echo ""