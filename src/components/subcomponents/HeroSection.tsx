import { Tag } from '@/global/components'
import { Button } from '@/ui/components'
import { LayoutGrid, MessageSquare } from 'lucide-react'
import { SectionLabel } from '../SectionLabel'

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-16 w-full">
      <div className="flex max-md:flex-col-reverse max-md:gap-20 gap-8 justify-between w-full max-w-6xl">
        {/* TEXT */}
        <div className="flex flex-col max-md:items-center max-md:text-center">
          <SectionLabel>Criatividade & Propósito</SectionLabel>

          <h1 className="font-serif text-5xl lg:text-7xl tracking-tighter font-semibold leading-tight text-white mb-2">
            Clarice DM<span className="text-teal">.</span>
          </h1>

          <p className="font-serif italic text-teal text-3xl tracking-tight mb-7">
            Design Gráfico & Artes Visuais
          </p>

          <p className=" text-gray-400 max-w-md leading-relaxed mb-10">
            Transformo ideias em experiências visuais memoráveis. Cada projeto é
            uma oportunidade de contar uma história única através de cores,
            formas e tipografia.
          </p>

          {/* Actions */}
          <div className="flex max-[450px]:flex-col w-full max-md:justify-center gap-4">
            <a href="#portfolio">
              <Button
                className="min-w-[12rem]"
                variant={'basic'}
                size={'default'}
                leftIcon={<LayoutGrid className="w-4 h-4 text-black" />}
              >
                Ver Portfólio
              </Button>
            </a>

            <a href="#contato">
              <Button
                className="group "
                variant={'ghost'}
                size={'default'}
                leftIcon={
                  <MessageSquare className="w-4 h-4 text-white group-hover:text-teal " />
                }
              >
                Contato
              </Button>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex  justify-center items-center relative">
          <div className="relative w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem]">
            <div className="absolute inset-[-4px] animate-spin-slow rounded-full bg-gradient-to-br from-transparent via-transparent to-teal"></div>

            <img
              src="/global/profile.webp"
              alt="Clarice"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-neutral-900"
            />

            {/* Badge */}
            <div className="float absolute bottom-5 z-10 -right-3">
              <Tag
                variant={'basic2'}
                size={'lg'}
                text=" Disponível para projetos"
                leftIcon={
                  <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
