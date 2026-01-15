import { Modal } from './Modal'

export type LightBoxProps = {
  src: string | undefined
  onClose: () => void
}

export function LightBox({ src, onClose }: LightBoxProps) {
  return (
    <Modal
      className="min-h-[100vh] bg-transparent p-0 border-0"
      title=""
      isOpen={!!src}
      onClose={onClose}
    >
      <div className="fixed inset-0 bg-black/80 z-10" onClick={onClose} />

      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <img
          src={src}
          className="max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-150 select-none rounded-lg"
        />
      </div>
    </Modal>
  )
}
