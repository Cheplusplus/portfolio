import { useEffect, useState, Dispatch, SetStateAction } from "react";
import oLogo from "../../assets/O-logo.svg";
import xLogo from "../../assets/X-logo.svg";

interface TileProps {
  id: number;
  isCrossesTurn: boolean;
  tileClicked: (id: number) => void;
  clickedTiles: number[];
  reset: boolean;
  setReset: Dispatch<SetStateAction<boolean>>;
}

const Tile = ({ id, isCrossesTurn, tileClicked, clickedTiles, reset, setReset }: TileProps) => {
  const [clicked, setClicked] = useState(false);
  const [player, setPlayer] = useState("");

  useEffect(() => {
    if (clickedTiles.includes(id) && !clicked) {
      setPlayer(!isCrossesTurn ? "X" : "O");
      setClicked(true);
    }
  }, [clickedTiles]);

  useEffect(() => {
    if (reset) {
      setPlayer("");
      setClicked(false);
      setReset(false);
    }
  }, [reset]);

  return (
    <div
      className="tile"
      onClick={
        !clicked
          ? () => {
              tileClicked(id);
            }
          : () => {}
      }
    >
      {player === "X" ? <img src={xLogo} className="tile-marker" /> : player === "O" ? <img src={oLogo} className="tile-marker" /> : null}
    </div>
  );
};

export default Tile;
