import { ProjectsSectionHeader, SocialPostInfo } from '@/components'
import { Card, LightBox, Tag } from '@/global/components'
import { HOME_PAGE_PORTOFOLIO } from '@/global/utils'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/project/$slug')({
  component: Project,
})

export default function Project() {
  const [viewBanner, setViewBanner] = useState<string | undefined>(undefined)
  const [selectedVerticalImage, setSelectedVerticalImage] = useState<
    string | undefined
  >(undefined)
  const [selectedHorizontalImage, setSelectedHorizontalImage] = useState<
    string | undefined
  >(undefined)

  const { slug } = Route.useParams()
  const portfolio = HOME_PAGE_PORTOFOLIO

  const project = portfolio.find((item) => item.slug === slug)

  const currentIndex = portfolio.findIndex((item) => item.slug === slug)
  const prevProject = currentIndex > 0 ? portfolio[currentIndex - 1] : null
  const nextProject =
    currentIndex < portfolio.length - 1 ? portfolio[currentIndex + 1] : null

  const projectAdditionalInfo = [
    { label: 'Cliente', value: project?.client },
    { label: 'Categoria', value: project?.tag },
    { label: 'Ano', value: project?.year },
    { label: 'Ferramentas', value: project?.ferramentas },
  ]

  const verticalImages = project?.projectImages.filter(
    (i) => i.type === 'vertical',
  )
  const horizontalImages = project?.projectImages.filter(
    (i) => i.type.includes('horizontal') || i.type.includes('full'),
  )

  if (!project) return <div>Projeto não encontrado</div>

  return (
    <div className="bg-gradient flex flex-col h-screen items-center w-full px-6 pt-32 pb-10 overflow-x-hidden">
      <div className="flex flex-col w-full max-w-3xl gap-8">
        {/* Return to homepage */}
        <div className="flex w-full gap-2 items-center">
          <a
            href="/"
            className="group tracking-tight flex items-center gap-2 text-sm text-gray-400 hover:text-teal 
           duration-400 cursor-pointer"
          >
            <span className="group-hover:-translate-x-1 text-lg duration-400">
              ←
            </span>
            Voltar ao portfólio
          </a>
          <Tag className="max-w-[6rem]" text="Prefeitura" />
        </div>

        {/* Project Name */}
        <h2 className="text-4xl sm:text-6xl font-semibold font-serif tracking-tight">
          {project.title}
        </h2>
        {/* Project Description */}
        <p className="text-base max-w-2xl leading-relaxed text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800/60" />

        {/* Additional Info */}
        <div className="grid grid-cols-2 sm:flex items-center justify-between gap-4">
          {projectAdditionalInfo.map((p, index) => (
            <div key={index} className="flex flex-col">
              <span className="uppercase text-[11px] text-gray-500 tracking-widest">
                {p.label}
              </span>
              <div className="tracking-tight text-[15px]">{p.value}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800/80 mb-16" />

        <section color="flex flex-col w-full h-full gap-10">
          <div className="flex flex-col gap-4">
            {/* Main Banner */}
            <img
              alt="main-banner"
              src={project.mainBanner}
              className="rounded-xl aspect-[16/9] object-cover border-2 border-teal-dark/70 hover:scale-101 duration-300 cursor-pointer"
              onClick={() => setViewBanner(project.mainBanner)}
            />

            <SocialPostInfo
              icon={project.publi.icon}
              social={project.publi.social}
              client={project.client}
              data={project.publi.data}
              socialLink={project.publi.link}
            />

            {/* View Main Banner */}
            <LightBox
              src={viewBanner}
              onClose={() => setViewBanner(undefined)}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px my-16 bg-gray-800/80" />

          {/* Vertical Images */}
          <ProjectsSectionHeader
            title=" Imagens Mobile"
            number={verticalImages?.length || 0}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4  cursor-pointer">
            {verticalImages?.map((img, index) => (
              <img
                alt="mobile-images"
                key={index}
                src={img.src}
                onClick={() => setSelectedVerticalImage(img.src)}
                className="w-full aspect-[9/16] object-cover border border-teal rounded-xl duration-300 hover:scale-[1.02]"
              />
            ))}
          </div>

          {/* View Vertical Image */}
          <LightBox
            src={selectedVerticalImage}
            onClose={() => setSelectedVerticalImage(undefined)}
          />

          {/* Divider */}
          <div className="w-full h-px my-16 bg-gray-800/80" />

          {/* Horizontal Images */}
          <ProjectsSectionHeader
            title=" Imagens Desktop"
            number={horizontalImages?.length || 0}
          />

          <div className="grid grid-cols-2 gap-4">
            {horizontalImages?.map((img, index) => (
              <div
                key={index}
                className={`${img.type === 'full' ? 'col-span-2' : 'col-span-1'} gap-4 cursor-pointer`}
              >
                <img
                  alt="desktop-images"
                  src={img.src}
                  onClick={() => setSelectedHorizontalImage(img.src)}
                  className={`w-full ${img.type === 'horizontal' ? 'aspect-[16/9]' : ''} object-cover border border-teal rounded-xl 
                  duration-300 hover:scale-[1.02]
             `}
                />
              </div>
            ))}

            {/* View Horizontal Image */}
            <LightBox
              src={selectedHorizontalImage}
              onClose={() => setSelectedHorizontalImage(undefined)}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px mt-16 mb-6 bg-gray-800/80" />
        </section>

        {/* Links */}
        <div className="flex w-full max-sm:flex-col gap-4 max-sm:items-center sm:justify-between">
          {prevProject ? (
            <Link
              className="w-full sm:w-1/2"
              to={'/project/$slug'}
              params={{ slug: prevProject.slug }}
            >
              <Card
                variant="navigation"
                size="base"
                className="max-sm:items-center"
              >
                <span className="text-sm uppercase font-serif text-gray-400/90">
                  ← Anterior
                </span>
                <span className="text-xl sm:text-2xl font-semibold">
                  {prevProject.title}
                </span>
              </Card>
            </Link>
          ) : (
            <div className="w-full sm:w-1/2">
              <Card
                variant="navigation"
                size="base"
                className="max-sm:items-center opacity-50 pointer-events-none"
              >
                <span className="text-sm uppercase font-serif text-gray-400/90">
                  ← Anterior
                </span>
                <span className="text-xl sm:text-2xl font-semibold">
                  Nenhum
                </span>
              </Card>
            </div>
          )}

          {nextProject ? (
            <Link
              className="w-full sm:w-1/2"
              to={'/project/$slug'}
              params={{ slug: nextProject.slug }}
            >
              <Card
                variant="navigation"
                size="base"
                className="max-sm:items-center"
              >
                <span className="text-sm uppercase font-serif text-gray-400/90">
                  ← Anterior
                </span>
                <span className="text-xl sm:text-2xl font-semibold">
                  {nextProject.title}
                </span>
              </Card>
            </Link>
          ) : (
            <div className="w-full sm:w-1/2">
              <Card
                variant="navigation"
                size="base"
                className="max-sm:items-center opacity-50 pointer-events-none"
              >
                <span className="text-sm uppercase font-serif text-gray-400/90">
                  Próximo →
                </span>
                <span className="text-xl sm:text-2xl font-semibold">
                  Nenhum
                </span>
              </Card>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-px my-6 bg-gray-800/80" />

        <p className="text-gray-400/80 text-xs text-center">
          © 2026 Clarice DM. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}
