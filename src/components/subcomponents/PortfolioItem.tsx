import { Button } from '@/ui/components'
import { MoveRight } from 'lucide-react'

export type PortfolioItemProps = {
  number: number
  tag: string
  title: string
  description: string
  images: Array<string>
  onImageClick: (src: string) => void
  gridStyle?: string
  aspect?: string
  index: number
}

export function PortfolioItem({
  number,
  tag,
  title,
  description,
  images,
  onImageClick,
  gridStyle,
  aspect,
  index,
}: PortfolioItemProps) {
  return (
    <div className="flex flex-col md:items-center gap-8 w-full max-w-5xl">
      <div
        className={`flex max-md:flex-col w-full md:items-center gap-10
        ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
        `}
      >
        <div className="flex flex-col gap-6">
          <div className="relative">
            <span className="font-serif text-teal text-7xl font-semibold opacity-15 tracking-tighter">
              {String(number).padStart(2, '0')}
            </span>

            {/* Tag */}
            <div
              className="absolute bottom-0 uppercase text-teal text-[10px] font-semibold border border-teal px-4 py-1 
            rounded-full bg-teal/10"
            >
              {tag}
            </div>
          </div>

          <h3 className="text-3xl font-semibold font-serif">{title}</h3>

          <p className="max-w-md lg:w-md text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>

          <Button
            className="max-w-[15rem] text-teal font-semibold"
            variant={'ghost'}
            rightIcon={<MoveRight className="text-teal" />}
          >
            Ver projeto completo
          </Button>
        </div>

        <div className={`w-full grid ${gridStyle} gap-4`}>
          {images.map((value, indexImage) => (
            <img
              key={indexImage}
              src={value}
              onClick={() => onImageClick(value)}
              className={`w-full ${aspect} object-cover min-h-[7rem] sm:min-h-[8rem] max-h-[15rem] rounded-2xl transition 
              duration-200 hover:scale-105 cursor-pointer border-2 border-teal-dark`}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="bg-linear-to-r my-20 via-gray-800 w-full h-px" />
    </div>
  )
}
