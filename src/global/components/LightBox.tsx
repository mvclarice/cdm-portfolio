import { useEffect } from 'react'
import { Modal } from './Modal'

export type LightBoxProps = {
  src: string | undefined
  onClose: () => void
}

export function LightBox({ src, onClose }: LightBoxProps) {
  // Close the modal when the user clicks ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <Modal
      className="min-h-[100vh] bg-transparent p-0 border-0"
      title=""
      isOpen={!!src}
      onClose={onClose}
    >
      <div
        className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center"
        onClick={onClose}
      >
        <img
          src={src}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
        />
      </div>
    </Modal>
  )
}
