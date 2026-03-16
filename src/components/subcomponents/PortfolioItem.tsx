import { Button } from '@/ui/components'
import { MoveRight } from 'lucide-react'

export type PortfolioItemProps = {
  number: number
  tag: string
  title: string
  description: string
  images: []
}

export function PortfolioItem({
  number,
  tag,
  title,
  description,
  images,
}: PortfolioItemProps) {
  return (
    <div className="flex max-md:flex-col md:items-center gap-8 w-full max-w-5xl">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <span className="font-serif text-teal text-7xl font-semibold opacity-15 tracking-tighter">
            {number}
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

      <div className="w-full grid grid-cols-2 gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-full aspect-video min-h-[7rem] rounded-2xl bg-teal-dark"
          />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700" />
    </div>
  )
}
