import { Button } from '@/ui/components'

const whatsappMessage =
  'Olá! Eu vi o seu portfólio e gostaria de informações sobre seus serviços de design e artes visuais. Podemos conversar?'

export function ContactSection() {
  return (
    <div className="h-full flex flex-col items-center gap-10 justify-center w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-white font-serif text-3xl sm:text-4xl font-semibold">
          Vamos criar algo incrível juntos?
        </h2>

        <h3 className="text-gray-500">
          Entre em contato e transforme sua ideia em realidade.
        </h3>
      </div>

      <div className="flex max-[470px]:flex-col w-full justify-center gap-4">
        <a
          target="_blank"
          href="https://instagram.com/clarice.dm/?igsh=NzJwdXpldnJsbTUx#"
          rel="noopener noreferrer"
        >
          <Button
            className="min-w-[10rem]"
            variant={'insta'}
            leftIcon={<img className="size-6" src="/instagram.svg" />}
          >
            Instagram
          </Button>
        </a>
        <a
          target="_blank"
          href={`https://wa.me/64999924488?text=${encodeURIComponent(whatsappMessage)}`}
          rel="noopener noreferrer"
        >
          <Button
            className="min-w-[10rem]"
            variant={'whats'}
            leftIcon={<img className="size-6" src="/whatsapp.svg" />}
          >
            Whatsapp
          </Button>
        </a>
      </div>

      <p className="text-gray-500 text-xs">
        © 2026 Clarice DM. Todos os direitos reservados.
      </p>
    </div>
  )
}
