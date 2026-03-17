import { Card } from '@/global/components'

export type SocialPostInfoProps = {
  icon: string
  social: string
  client: string
  data: string
}

export function SocialPostInfo({
  icon,
  social,
  client,
  data,
}: SocialPostInfoProps) {
  return (
    <Card className="w-full" variant={'dark'} size={'sm'}>
      <div className="flex gap-2 items-center">
        <img className="size-6" src={icon} />

        <div className="flex flex-col font-semibold">
          <span className="text-[13px] text-gray-300">{`${social} — ${client}`}</span>
          <span className="text-[13px] text-gray-500">{`Publicado em ${data}`}</span>
        </div>
      </div>
    </Card>
  )
}
