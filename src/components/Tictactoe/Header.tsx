import { Dispatch, SetStateAction } from "react";
import GameLogo from "./GameLogo";
import TurnIndicator from "./TurnIndicator";
import ResetButton from "./ResetButton";

interface HeaderProps {
  setResetModal: Dispatch<SetStateAction<boolean>>;
  isCrossesTurn: boolean;
}

const Header = ({ setResetModal, isCrossesTurn }: HeaderProps) => {
  return (
    <div className="game-header">
      <GameLogo />
      <TurnIndicator isCrossesTurn={isCrossesTurn} />
      <ResetButton setResetModal={setResetModal} />
    </div>
  );
};

export default Header;
