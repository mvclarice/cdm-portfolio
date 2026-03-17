import { SocialPostInfo } from '@/components'
import { LightBox, Tag } from '@/global/components'
import { HOME_PAGE_PORTOFOLIO } from '@/global/utils'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/project/$slug')({
  component: Project,
})

export default function Project() {
  const [viewBanner, setViewBanner] = useState<string | undefined>(undefined)

  const { slug } = Route.useParams()

  const project = HOME_PAGE_PORTOFOLIO.find((item) => item.slug === slug)

  const projectAdditionalInfo = [
    { label: 'Cliente', value: project?.client },
    { label: 'Categoria', value: project?.tag },
    { label: 'Ano', value: project?.year },
    { label: 'Ferramentas', value: project?.ferramentas },
  ]

  // TO DO TOMORROW

  // 1 FINISH PROJECT PAGE IMAGES
  // 2 FINISH TO FILL THE PORTFOLIO OBJECT (PROJECT IMAGES)
  // 3 IMPLEMENT THE LIGHTBOX FOR IMAGES

  return (
    <div className="bg-gradient flex flex-col h-screen items-center w-full px-6 py-32 overflow-x-hidden">
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
          {project?.title}
        </h2>
        {/* Project Description */}
        <p className="text-base max-w-2xl leading-relaxed text-gray-400 mb-4">
          {project?.description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-900" />

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
        <div className="w-full h-px bg-gray-900 mb-16" />

        <div className="flex flex-col gap-4">
          {/* Main Banner */}
          <img
            src={project?.mainBanner}
            className="rounded-2xl aspect-video object-cover border-2 border-teal-dark/70 hover:scale-101 duration-300 cursor-pointer"
            onClick={() => setViewBanner(project?.mainBanner)}
          />

          <SocialPostInfo
            icon={project!.publi.icon}
            social={project!.publi.social}
            client={project!.client}
            data={project!.publi.data}
            socialLink={project!.publi.link}
          />

          {/* View Main Banner */}
          <LightBox src={viewBanner} onClose={() => setViewBanner(undefined)} />
        </div>

        {/* Divider */}
        <div className="w-full h-px my-10 bg-gray-900" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project?.projectImages.map((value, index) => (
            <img
              key={index}
              src={value}
              className=" border object-contain rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
