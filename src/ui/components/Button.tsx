import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const buttonStyle = cva(
  'flex w-full items-center justify-center cursor-pointer',
  {
    variants: {
      variant: {
        basic: `text-black font-semibold bg-teal border border-teal hover:-translate-y-[2px]
          duration-300 hover:shadow-[0_0_30px_rgba(60,99,53,0.35)] 
          `,
        ghost: `text-white border border-gray-700 hover:text-teal hover:border-teal hover:-translate-y-[2px] 
          hover:border-2`,
      },
      size: {
        default: 'px-8 py-3 rounded-full text-sm',
      },
    },
    defaultVariants: {
      variant: 'basic',
      size: 'default',
    },
  },
)

type ButtonProps = ComponentPropsWithRef<'button'> & {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
} & VariantProps<typeof buttonStyle>

export function Button({
  leftIcon,
  rightIcon,
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'relative flex items-center justify-center gap-2',
        buttonStyle({ variant, size }),
        className,
      )}
      {...props}
    >
      {leftIcon && <span className="text-gray-400 text-lg">{leftIcon}</span>}

      {children}

      {rightIcon && <span className="text-gray-400 text-lg">{rightIcon}</span>}
    </button>
  )
}
