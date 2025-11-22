#!/bin/bash

# Softrinx Project Structure Setup
# Run this after: npx create-next-app@latest softrinx
# Next.js 16+ with app folder (no src)

# ============================================
# PUBLIC FOLDERS
# ============================================
mkdir -p public/images/{hero,portfolio,case-studies,team}
mkdir -p public/videos
mkdir -p public/icons

# ============================================
# APP FOLDER - ROUTING
# ============================================

# Layout groups
mkdir -p "app/(root)"
mkdir -p "app/(pages)"/{services,portfolio,about,blog,contact}
mkdir -p "app/(pages)/portfolio/[id]"
mkdir -p "app/(pages)/blog/[slug]"

# API routes
mkdir -p app/api/{contact,quote,webhooks/appwrite}

# ============================================
# COMPONENTS
# ============================================
mkdir -p components/layout
mkdir -p components/sections
mkdir -p components/ui
mkdir -p components/interactive

# ============================================
# LIB & CONFIG
# ============================================
mkdir -p lib
mkdir -p hooks
mkdir -p services
mkdir -p types
mkdir -p styles

# ============================================
# CREATE APP ROUTER FILES
# ============================================

# Root layout group
touch "app/(root)/layout.tsx"
touch "app/(root)/page.tsx"
touch "app/(root)/globals.css"

# Pages group
touch "app/(pages)/layout.tsx"
touch "app/(pages)/services/page.tsx"
touch "app/(pages)/portfolio/page.tsx"
touch "app/(pages)/portfolio/[id]/page.tsx"
touch "app/(pages)/about/page.tsx"
touch "app/(pages)/blog/page.tsx"
touch "app/(pages)/blog/[slug]/page.tsx"
touch "app/(pages)/contact/page.tsx"

# API routes
touch app/api/contact/route.ts
touch app/api/quote/route.ts
touch "app/api/webhooks/appwrite/route.ts"

# Error handling
touch app/error.tsx
touch app/not-found.tsx

# ============================================
# COMPONENT FILES
# ============================================

# Layout
touch components/layout/Header.tsx
touch components/layout/Footer.tsx
touch components/layout/Navigation.tsx

# Sections
touch components/sections/Hero.tsx
touch components/sections/Services.tsx
touch components/sections/Portfolio.tsx
touch components/sections/CaseStudies.tsx
touch components/sections/About.tsx
touch components/sections/ContactForm.tsx
touch components/sections/Stats.tsx

# UI
touch components/ui/Button.tsx
touch components/ui/Input.tsx
touch components/ui/Card.tsx
touch components/ui/Badge.tsx
touch components/ui/Modal.tsx

# Interactive
touch components/interactive/ServiceDemo.tsx
touch components/interactive/QuoteCalculator.tsx
touch components/interactive/ProjectFilter.tsx
touch components/interactive/ScrollAnimation.tsx

# ============================================
# LIB & UTILITIES
# ============================================
touch lib/appwrite.ts
touch lib/seo.ts
touch lib/validation.ts
touch lib/constants.ts

# Hooks
touch hooks/useAppwrite.ts
touch hooks/useInView.ts

# Services
touch services/portfolio.ts
touch services/contact.ts
touch services/leads.ts

# Types
touch types/portfolio.ts
touch types/contact.ts

# Styles (Tailwind + Sass)
touch styles/globals.scss
touch styles/animations.scss
touch styles/variables.scss

# ============================================
# ENV FILES
# ============================================
touch .env.local
touch .env.example

echo "✅ Softrinx project structure created successfully!"
echo ""
echo "Project uses:"
echo "- Next.js 16+ app folder routing"
echo "- Tailwind CSS (main styling)"
echo "- Sass/SCSS (animations, variables)"
echo "- Lucide React (icons)"
echo ""
echo "Next steps:"
echo "1. Install dependencies: npm install lucide-react"
echo "2. Add environment variables to .env.local"
echo "3. Start building components"
echo ""
echo "Happy coding! 🚀"