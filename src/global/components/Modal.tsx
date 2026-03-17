import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'
import { Card } from './Card'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  className?: string
  children: React.ReactNode
}

export function Modal({
  isOpen,
  onClose,
  title,
  className,
  children,
}: ModalProps) {
  if (!isOpen) return null

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className=" fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <Card
        className={twMerge(
          'w-[calc(100%-1.5rem)] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 z-50',
          className,
        )}
      >
        <div
          className={twMerge(
            'flex items-center gap-2',
            title ? 'justify-between' : 'justify-end m-4',
          )}
        >
          {/* Title */}
          {title && (
            <div className="w-full flex flex-col items-center gap-8">
              <span className="text-2xl max-sm:text-center sm:text-3xl text-white font-bold">
                {title}
              </span>
            </div>
          )}

          <button
            className="z-[60] cursor-pointer border border-teal-light p-2 rounded-2xl hover:bg-teal-dark"
            onClick={onClose}
          >
            <X className="cursor-pointer" size={28} color="white" />
          </button>
        </div>

        <div className="w-full h-0.5 mb-8 bg-green-900/40" />

        {children}
      </Card>
    </>,
    document.body,
  )
}
