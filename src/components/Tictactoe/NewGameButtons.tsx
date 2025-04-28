import { Dispatch, SetStateAction } from 'react'

interface NewGameButtonsProps {
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  setCpuEnabled: Dispatch<SetStateAction<boolean>>
}

const NewGameButtons = ({
  setIsPlaying,
  setCpuEnabled,
}: NewGameButtonsProps) => {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsPlaying(true)
          setCpuEnabled(true)
        }}
      >
        New Game (VS CPU)
      </button>
      <button
        type="button"
        onClick={() => {
          setIsPlaying(true)
          setCpuEnabled(false)
        }}
      >
        New Game (VS PLAYER)
      </button>
    </>
  )
}

export default NewGameButtons
