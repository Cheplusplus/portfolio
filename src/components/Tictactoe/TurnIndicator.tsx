import oLogo from "../../assets/O-logo.svg";
import xLogo from "../../assets/X-logo.svg";

interface TurnIndicatorProps {
  isCrossesTurn: boolean;
}

const TurnIndicator = ({ isCrossesTurn }: TurnIndicatorProps) => {
  return (
    <div className="flex-3 large-text turn-indicator-holder">
      <img src={isCrossesTurn ? xLogo : oLogo} className="turn-indicator-img" />
      <h2>TURN</h2>
    </div>
  );
};

export default TurnIndicator;
