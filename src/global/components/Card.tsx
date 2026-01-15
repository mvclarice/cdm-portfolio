import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const cardStyle = cva('w-full flex flex-col h-auto', {
  variants: {
    variant: {
      basic: ' border-2 border-green-900/50 bg-green-950',
      basic2: '',
      gradient:
        'bg-gradient-to-b from-green-950 to-green-800 border-12 border-green-800',
    },
    size: {
      lg: 'max-sm:p-8 p-12 rounded-3xl',
      md: 'p-8 rounded-3xl',
    },
  },
  defaultVariants: {
    variant: 'basic',
    size: 'lg',
  },
})

export type CardProps = ComponentPropsWithRef<'div'> & {
  className?: string
} & VariantProps<typeof cardStyle>

export function Card({
  variant = 'basic',
  size = 'md',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(cardStyle({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  )
}
