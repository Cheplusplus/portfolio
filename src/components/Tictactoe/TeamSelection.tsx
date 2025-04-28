import { Dispatch, SetStateAction, useState } from "react";
import oLogo from "../../assets/O-logo.svg";
import xLogo from "../../assets/X-logo.svg";

interface TeamSelectionProps {
  setIsCrosses: Dispatch<SetStateAction<boolean>>;
  isCrosses: boolean;
}

const TeamSelection = ({ setIsCrosses, isCrosses }: TeamSelectionProps) => {
  const [choiceIsCrosses, setChoiceIsCrosses] = useState(false);
  return (
    <div className="team-selector-holder">
      <button
        className="team-selector"
        type="button"
        onClick={() => {
          setIsCrosses(!isCrosses);
          setChoiceIsCrosses(!choiceIsCrosses);
        }}
      >
        <div className={!choiceIsCrosses ? "selected-logo" : ""}>
          <img src={xLogo} className={!choiceIsCrosses ? "selected-color" : "unselected-color"} />
        </div>
        <div className={choiceIsCrosses ? "selected-logo" : ""}>
          <img src={oLogo} className={choiceIsCrosses ? "selected-color" : "unselected-color"} />
        </div>
      </button>
    </div>
  );
};

export default TeamSelection;
