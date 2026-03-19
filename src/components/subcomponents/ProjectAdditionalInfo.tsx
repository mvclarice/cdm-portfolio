export type ProjectAdditionalInfoProps = {
  client: string
  category: string
  period: string
  tools: string
}

export function ProjectAdditionalInfo({
  client,
  category,
  period,
  tools,
}: ProjectAdditionalInfoProps) {
  const items = [
    { label: 'Cliente', value: client },
    { label: 'Categoria', value: category },
    { label: 'Ano', value: period },
    { label: 'Ferramentas', value: tools },
  ]
  return (
    <div className="grid grid-cols-2 sm:flex items-center justify-between gap-4">
      {items.map((item) => (
        <div className="flex flex-col">
          <span className="uppercase text-[11px] text-gray-500 tracking-widest">
            {item.label}
          </span>
          <div className="tracking-tight text-[15px]">{item.value}</div>
        </div>
      ))}
    </div>
  )
}
