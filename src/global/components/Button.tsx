import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyle = cva(
  'w-full flex items-center justify-center cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-green-700 hover:bg-green-800 transition font-semibold',
        secondary:
          'border border-white/30 hover:bg-white/10 transition font-semibold',
        social1: 'bg-pink-400 border-b-3 border-pink-300',
        social2: 'bg-green-600 border-b-3 border-green-300',
      },
      size: {
        md: 'px-10 h-14 rounded-xl text-base',
        lg: 'px-10 h-14 rounded-xl text-base',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
)

interface ButtonProps
  extends ComponentPropsWithRef<'button'>, VariantProps<typeof buttonStyle> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  className?: string
  disabled?: boolean
}

export function Button({
  size,
  variant = 'primary',
  iconLeft,
  iconRight,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `${disabled ? '!cursor-not-allowed opacity-80' : ''}`,
        buttonStyle({ variant: variant, size }),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <div className="flex mr-2">{iconLeft}</div>}
      {children}
      {iconRight && <div className="flex ml-2">{iconRight}</div>}
    </button>
  )
}
