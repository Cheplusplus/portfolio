import oLogo from "../../assets/O-logo.svg";
import xLogo from "../../assets/X-logo.svg";
import { motion } from "motion/react";

const GameLogo = () => {
  return (
    <motion.div initial={{ x: "-30px" }} animate={{ x: 0 }} className="flex-3 flex game-logo-container">
      <img src={xLogo} className="game-logo" />
      <img src={oLogo} className="game-logo" />
    </motion.div>
  );
};

export default GameLogo;
