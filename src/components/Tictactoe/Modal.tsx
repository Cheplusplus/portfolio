import { ReactNode } from 'react'

interface ModalProps {
  content: ReactNode
  buttonText: { btn1: string; btn2: string }
  buttonFns: { fn1: () => void; fn2: () => void }
}

const Modal = ({ content, buttonText, buttonFns }: ModalProps) => {
  return (
    <div className="game-over-modal modal">
      {content}
      <button onClick={buttonFns.fn1}>{buttonText.btn1}</button>
      <button onClick={buttonFns.fn2}>{buttonText.btn2}</button>
    </div>
  )
}

export default Modal
