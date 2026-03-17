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

        ghost: ` text-white border border-gray-700 hover:text-teal hover:border-teal hover:-translate-y-[2px] 
          hover:border-2`,

        insta: `bg-gray-900/50 text-white border-2 border-gray-700/40 hover:border-red-700 hover:-translate-y-[2px] 
          hover:border-2 font-semibold duration-300 hover:shadow-[0_0_30px_rgba(185,28,28,0.35)]`,

        whats: `bg-gray-900/50 text-white border-2 border-gray-700/40 hover:border-green-700 hover:-translate-y-[2px] 
         font-semibold duration-300 hover:shadow-[0_0_30px_rgba(21,128,61,0.35)]`,
        disabled:
          '!text-red-400/50 border border-red-500/15 bg-red-700/10 cursor-alias',
      },
      size: {
        default: 'px-8 py-3 rounded-full text-sm',
        sm: 'py-1.5 px-4 rounded-full text-xs text-teal font-semibold',
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
