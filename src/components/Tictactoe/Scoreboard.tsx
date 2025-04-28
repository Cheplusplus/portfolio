import oLogo from "../../assets/O-logo.svg";
import xLogo from "../../assets/X-logo.svg";
import { motion } from "motion/react";

interface Scores {
  p1Score: number;
  p2Score: number;
  drawScore: number;
}

interface ScoreboardProps {
  scores: Scores;
  isCrosses: boolean;
}
const Scoreboard = ({ scores: { p1Score, p2Score, drawScore }, isCrosses }: ScoreboardProps) => {
  return (
    <motion.div initial={{ y: "30px" }} animate={{ y: 0 }} className="scorecard-holder">
      <div className="scorecard">
        <p>{isCrosses ? <img src={xLogo} /> : <img src={oLogo} />}</p>
        <span className="score">{p1Score}</span>
      </div>
      <div className="scorecard">
        <p>TIES</p>
        <span>{drawScore}</span>
      </div>
      <div className="scorecard">
        <p>{!isCrosses ? <img src={xLogo} /> : <img src={oLogo} />}</p>
        <span className="score">{p2Score}</span>
      </div>
    </motion.div>
  );
};

export default Scoreboard;
