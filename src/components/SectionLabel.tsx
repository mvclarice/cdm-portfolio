import type { ReactNode } from 'react'

export function SectionLabel({
  children,
  rightDivider,
}: {
  children: ReactNode
  rightDivider?: boolean
}) {
  return (
    <div
      className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase 
        text-teal mb-4"
    >
      <span className="w-7 h-px bg-teal" />

      {children}

      {rightDivider && <span className="w-7 h-px bg-teal " />}
    </div>
  )
}
