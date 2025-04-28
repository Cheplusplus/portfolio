import { useEffect, useState } from "react";
import Menu from "./Menu";
import Game from "./Game";

const Content = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCrosses, setIsCrosses] = useState(true);
  const [cpuEnabled, setCpuEnabled] = useState(true);

  useEffect(() => {
    !isPlaying ? setIsCrosses(true) : null;
  }, [isPlaying]);

  return (
    <div className="game-content">
      {isPlaying ? <Game isCrosses={isCrosses} setIsPlaying={setIsPlaying} cpuEnabled={cpuEnabled} /> : <Menu setIsCrosses={setIsCrosses} setIsPlaying={setIsPlaying} setCpuEnabled={setCpuEnabled} isCrosses={isCrosses} />}
    </div>
  );
};

export default Content;
