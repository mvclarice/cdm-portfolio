import { ProjectLogo } from '@/components'
import { Card, Modal } from '@/global/components'
import { LightBox } from '@/global/components/LightBox'
import type { Album } from '@/portfolio/utils'
import { albums } from '@/portfolio/utils'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

export function Portfolio() {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null)
  const [activePhoto, setActivePhoto] = useState<string | undefined>()

  return (
    <section className="w-full min-h-screen py-24 px-6 sm:px-8 flex flex-col items-center gap-14">
      <ProjectLogo />

      <header color="flex flex-col gap-2">
        <div className="text-center max-w-3xl">
          <h1 className="text-white uppercase text-4xl font-extrabold">
            Trabalhos selecionados
          </h1>

          <p className="mt-4 text-white/70 text-xl">
            Uma seleção de alguns projetos recentes.
          </p>
        </div>
      </header>

      <div className="w-full grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 max-sm:gap-6 gap-4">
        {albums.map((album) => (
          <Card
            key={album.id}
            onClick={() => setActiveAlbum(album)}
            className="group relative aspect-video p-0 border-2 sm:border-0 border-[#07b850] rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.03]"
          >
            <img
              src={album.cover}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover object- transition-opacity duration-300 group-hover:opacity-0"
            />

            <img
              src={album.photos[0]}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-4 left-4">
              <span className="text-white/60 text-sm">{album.id}</span>
              <h3 className="text-white text-xl font-bold">{album.title}</h3>
            </div>
          </Card>
        ))}
      </div>

      {activeAlbum && (
        <Modal
          title={activeAlbum.title}
          isOpen
          onClose={() => setActiveAlbum(null)}
          className="max-w-[92vw] h-[90vh] p-6 overflow-y-auto"
        >
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
            {activeAlbum.photos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                loading="lazy"
                decoding="async"
                onClick={() => setActivePhoto(photo)}
                className="aspect-square w-full object-cover rounded-xl cursor-zoom-in transition-transform hover:scale-105"
              />
            ))}
          </div>
        </Modal>
      )}

      <LightBox src={activePhoto} onClose={() => setActivePhoto(undefined)} />
    </section>
  )
}
