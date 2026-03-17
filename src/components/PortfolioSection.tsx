import { LightBox } from '@/global/components'
import { HOME_PAGE_PORTOFOLIO } from '@/global/utils'
import { useState } from 'react'
import { SectionLabel } from './SectionLabel'
import { PortfolioItem } from './subcomponents/PortfolioItem'

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  )

  return (
    <div className=" h-full flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center my-20">
        <SectionLabel rightDivider={true}>Trabalhos Selecionados</SectionLabel>

        <h2 className="text-[52px] font-serif font-semibold tracking-tight">
          Portfólio
        </h2>
      </div>

      {HOME_PAGE_PORTOFOLIO.map((item, index) => (
        <PortfolioItem
          key={`${item.id}_${index}`}
          number={item.id}
          tag={item.tag}
          title={item.title}
          description={item.description}
          images={item.images}
          onImageClick={setSelectedImage}
          gridStyle={item.style}
          aspect={item.aspect}
          index={index}
        />
      ))}

      <LightBox
        src={selectedImage}
        onClose={() => setSelectedImage(undefined)}
      />
    </div>
  )
}
