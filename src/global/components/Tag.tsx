import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const tagStyle = cva('flex w-full items-center justify-center gap-2', {
  variants: {
    variant: {
      basic:
        'uppercase text-teal text-[10px] font-semibold border border-teal bg-teal/10',
      basic2:
        'bg-neutral-900/80 backdrop-blur border border-gray-800 font-semibold tracking-tight text-gray-200',
    },
    size: {
      default: 'px-4 py-1 rounded-full',
      lg: 'text-xs px-4 py-2.5 rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'basic',
    size: 'default',
  },
})

export type TagProps = ComponentPropsWithRef<'div'> & {
  text: string
  leftIcon?: ReactNode
  children?: ReactNode
} & VariantProps<typeof tagStyle>

export function Tag({
  text,
  leftIcon,
  variant,
  size,
  children,
  className,
  ...props
}: TagProps) {
  return (
    <div className={twMerge(tagStyle({ variant, size }), className)} {...props}>
      {leftIcon && leftIcon}

      <span>{text}</span>

      {children}
    </div>
  )
}
