import oLogo from "../../assets/O-logo.svg";
import xLogo from "../../assets/X-logo.svg";

const GameLogo = () => {
  return (
    <div className="flex-3 flex game-logo-container">
      <img src={xLogo} className="game-logo" />
      <img src={oLogo} className="game-logo" />
    </div>
  );
};

export default GameLogo;
