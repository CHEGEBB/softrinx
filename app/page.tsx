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
