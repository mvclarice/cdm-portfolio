import { twMerge } from 'tailwind-merge'

export type ProjectLogoProps = {
  className?: string
}

export function ProjectLogo({ className }: ProjectLogoProps) {
  return (
    <div className={twMerge('flex flex-col items-center gap-4', className)}>
      <img src="/global/user-logo.jpg" className="size-24 rounded-full" />
      <span className="text-3xl text-white/80 font-bold tracking-wide">
        Clarice DM<span className="text-green-600">.</span>
      </span>
    </div>
  )
}
