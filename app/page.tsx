import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import CaseStudies from '@/components/sections/CaseStudies'
import Stats from '@/components/sections/Stats'
import ContactForm from '@/components/sections/ContactForm'
import Navigation from '@/components/layout/Navigation'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <main>
      <Navigation/>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <About/>

      <CaseStudies />
      <ContactForm />
    </main>
  )
}
