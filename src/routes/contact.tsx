import { ProjectLogo } from '@/components'
import { Button, Card } from '@/global/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const whatsappMessage =
  'Olá! Eu vi o seu portfólio e gostaria de informações sobre seus serviços de design e artes visuais. Podemos conversar?'

function Contact() {
  return (
    <section className="relative h-screen py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" />

      {/* Card */}
      <Card
        className="relative z-10 items-center max-w-2xl w-full"
        variant="gradient"
        size="lg"
      >
        <ProjectLogo />

        <div className="flex flex-col gap-4 mt-12 text-center">
          <h1 className="text-white text-4xl max-sm:text-3xl font-extrabold">
            Entre em contato comigo.
          </h1>

          <h2 className="text-white/80 max-w-sm mx-auto">
            Valores, prazos e detalhes podem ser combinados por uma dessas
            redes.
          </h2>

          {/* <p className="relative z-10 text-base text-white/80">
            Respondo normalmente em até 24 horas
          </p> */}
        </div>

        <div className="flex flex-col gap-6 mt-8 font-semibold">
          <a
            href="https://instagram.com/clarice.dm/?igsh=NzJwdXpldnJsbTUx#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="text-white hover:scale-105 "
              variant={'social1'}
              size={'lg'}
              iconLeft={
                <img
                  className="min-h-10 min-w-10 max-h-10 max-w-10 rounded-full"
                  src="instagram.svg"
                />
              }
            >
              Instagram
            </Button>
          </a>

          <a
            href={`https://wa.me/64999924488?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="text-white hover:scale-105"
              variant={'social2'}
              size={'lg'}
              iconLeft={
                <img
                  className="min-h-9 min-w-9 max-h-9 max-w-9 rounded-full"
                  src="whatsapp.svg"
                />
              }
            >
              WhatsApp
            </Button>
          </a>
        </div>
      </Card>
    </section>
  )
}
