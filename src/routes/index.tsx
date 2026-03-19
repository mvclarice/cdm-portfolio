import { ContactSection, PortfolioSection } from '@/components'
import { HeroSection } from '@/components/subcomponents/HeroSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

export default function HomePage() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-[-1] bg-gradient" />

      <main className="flex flex-col px-6 max-sm:pt-32 py-20 overflow-x-hidden">
        {/* Hero Section */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <PortfolioSection />
        </section>

        {/* Contact Section */}
        <section id="contato">
          <ContactSection />
        </section>
      </main>
    </>
  )
}
