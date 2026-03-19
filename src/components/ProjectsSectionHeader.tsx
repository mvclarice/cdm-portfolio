export type ProjectsSectionHeaderProps = {
  title: string
  number: number
}

export function ProjectsSectionHeader({
  title,
  number,
}: ProjectsSectionHeaderProps) {
  return (
    <div className="flex items-center max-sm:flex-col justify-between gap-4">
      <h3 className="text-3xl sm:text-4xl font-semibold font-serif tracking-tight">
        {title}
      </h3>
      <span className="text-[18px] font-serif text-gray-600/90">
        {number > 0
          ? `${String(number).padStart(2, '0')} ${number === 1 ? 'peça' : 'peças'} `
          : 'nenhuma peça'}
      </span>
    </div>
  )
}
