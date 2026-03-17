import { Card } from '@/global/components'
import { Button } from '@/ui/components'
import { CircleX, SquareArrowOutUpRight } from 'lucide-react'

export type SocialPostInfoProps = {
  icon: string
  social: string
  client: string
  data: string
  socialLink?: string
}

export function SocialPostInfo({
  icon,
  social,
  client,
  data,
  socialLink,
}: SocialPostInfoProps) {
  return (
    <Card
      className="w-full gap-2"
      variant={socialLink ? 'dark' : 'disabled'}
      size={'sm'}
    >
      <div className="flex max-sm:flex-col gap-4 sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="size-6" src={icon} />

          <div className="flex flex-col font-semibold">
            <span className="text-[13px] text-gray-300">{`${social} — ${client}`}</span>
            <span className="text-[13px] text-gray-500">{`Publicado em ${data}`}</span>
          </div>
        </div>

        {socialLink ? (
          <a className="max-sm:w-full" href={socialLink} target="_blank">
            <Button
              className="w-full sm:max-w-[7.5rem]"
              variant={'ghost'}
              size={'sm'}
              rightIcon={
                <SquareArrowOutUpRight className="size-3.5 text-teal" />
              }
            >
              View Post
            </Button>
          </a>
        ) : (
          <Button
            className="w-full sm:max-w-[11.5rem] "
            variant={'disabled'}
            size={'sm'}
            leftIcon={<CircleX className="size-3.5 text-red-500/40" />}
          >
            Publicação removida
          </Button>
        )}
      </div>

      {!socialLink && (
        <p className="text-xs italic text-gray-400/80">
          O local onde esse conteúdo foi publicado não está mais disponível
        </p>
      )}
    </Card>
  )
}
