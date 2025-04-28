import { Dispatch, SetStateAction } from 'react'
import GameLogo from './GameLogo'
import TeamSelection from './TeamSelection'
import NewGameButtons from './NewGameButtons'

interface MenuProps {
  setIsCrosses: Dispatch<SetStateAction<boolean>>
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  setCpuEnabled: Dispatch<SetStateAction<boolean>>
  isCrosses: boolean
}

const Menu = ({
  setIsCrosses,
  setIsPlaying,
  setCpuEnabled,
  isCrosses,
}: MenuProps) => {
  return (
    <div className="menu">
      <GameLogo />
      <TeamSelection setIsCrosses={setIsCrosses} isCrosses={isCrosses} />
      <NewGameButtons
        setIsPlaying={setIsPlaying}
        setCpuEnabled={setCpuEnabled}
      />
    </div>
  )
}

export default Menu
