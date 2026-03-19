import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const cardStyle = cva('w-full flex flex-col h-auto', {
  variants: {
    variant: {
      basic: ' border-2 border-green-900/50 bg-green-950',
      navigation:
        'bg-gray-900/50 hover:bg-green-700/10 hover:border-green-800/50 border border-gray-700/50 hover:-translate-y-1.5 duration-400 cursor-pointer',
      gradient:
        'bg-gradient-to-b from-green-950 to-green-800 border-12 border-green-800',
      dark: 'bg-gray-900 border border-gray-700/50',
      disabled: 'bg-red-400/5 border border-red-500/15',
    },

    size: {
      lg: 'max-sm:p-8 p-12 rounded-3xl',
      base: 'font-serif p-8 rounded-2xl',
      md: 'p-8 rounded-3xl',
      sm: 'p-4 rounded-2xl ',
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
