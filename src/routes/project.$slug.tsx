import { ProjectsSectionHeader, SocialPostInfo } from '@/components'
import { ProjectAdditionalInfo } from '@/components/subcomponents/ProjectAdditionalInfo'
import { LightBox, NavigationCard } from '@/global/components'
import { HOME_PAGE_PORTOFOLIO } from '@/global/utils'
import { Tag } from '@/ui/components'
import { createFileRoute } from '@tanstack/react-router'
import { useLayoutEffect, useState } from 'react'

export const Route = createFileRoute('/project/$slug')({
  component: Project,
})

export default function Project() {
  const [lightboxImage, setLightboxImage] = useState<string | undefined>(
    undefined,
  )

  const { slug } = Route.useParams()
  const portfolio = HOME_PAGE_PORTOFOLIO

  const currentIndex = portfolio.findIndex((item) => item.slug === slug)
  const project = portfolio[currentIndex]

  const prevProject = currentIndex > 0 ? portfolio[currentIndex - 1] : null
  const nextProject =
    currentIndex < portfolio.length - 1 ? portfolio[currentIndex + 1] : null

  // Filter images by mobile and desktop.
  const verticalImages = project.projectImages.filter(
    (i) => i.type === 'vertical',
  )
  const horizontalImages = project.projectImages.filter(
    (i) => i.type.includes('horizontal') || i.type.includes('full'),
  )

  // Scroll to top of the page when reloading or navigating between routes
  useLayoutEffect(() => {
    const container = document.getElementById('root')

    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [slug])

  return (
    <div
      id="root"
      className="bg-gradient flex flex-col min-h-screen items-center w-full px-6 pt-32 pb-10 overflow-x-hidden"
    >
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
        <ProjectAdditionalInfo
          client={project.client}
          category={project.tag}
          period={project.year}
          tools={project.ferramentas}
        />

        {/* Divider */}
        <div className="w-full h-px bg-gray-800/80 mb-16" />

        <div className="flex flex-col w-full h-full gap-16">
          <div className="flex flex-col gap-4">
            {/* Main Banner */}
            <img
              alt={`${project.title} - banner principal do projeto`}
              src={project.mainBanner}
              className="rounded-xl aspect-[16/9] object-cover border-2 border-teal-dark/70 hover:scale-101 duration-300 cursor-pointer"
              onClick={() => setLightboxImage(project.mainBanner)}
            />

            <SocialPostInfo
              icon={project.publi.icon}
              social={project.publi.social}
              client={project.client}
              data={project.publi.data}
              socialLink={project.publi.link}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800/80" />

          {/* Vertical Images Section*/}
          <section className="flex flex-col gap-10">
            <ProjectsSectionHeader
              title=" Imagens Mobile"
              number={verticalImages.length || 0}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
              {verticalImages.map((img, index) => (
                <img
                  alt={`${project.title} - layout mobile para ${project.client} (${index + 1})`}
                  key={index}
                  src={img.src}
                  onClick={() => setLightboxImage(img.src)}
                  className="w-full aspect-[9/16] object-cover border border-teal rounded-xl duration-300 hover:scale-[1.02]"
                />
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800/80" />

          {/* Horizontal Images Section*/}
          <section className="flex flex-col gap-10">
            <ProjectsSectionHeader
              title=" Imagens Desktop"
              number={horizontalImages.length || 0}
            />

            <div className="grid grid-cols-2 gap-4">
              {horizontalImages.map((img, index) => (
                <div
                  key={index}
                  className={`${img.type === 'full' ? 'col-span-2' : 'col-span-1'} gap-4 cursor-pointer`}
                >
                  <img
                    alt={`${project.title} - layout desktop para ${project.client} (${index + 1})`}
                    src={img.src}
                    onClick={() => setLightboxImage(img.src)}
                    className={`w-full ${img.type === 'horizontal' ? 'aspect-[16/9]' : ''} object-cover border border-teal rounded-xl 
                  duration-300 hover:scale-[1.02]
             `}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800/80" />

          {/* Navigation Cards */}
          <div className="flex w-full max-sm:flex-col gap-4 max-sm:items-center sm:justify-between">
            <NavigationCard project={prevProject} direction="prev" />
            <NavigationCard project={nextProject} direction="next" />
          </div>

          {/* Rights */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-px bg-gray-800/60" />

            <p className="text-gray-400/80 text-xs text-center">
              © 2026 Clarice DM. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* View Selected Image */}
      <LightBox
        src={lightboxImage}
        onClose={() => setLightboxImage(undefined)}
      />
    </div>
  )
}
