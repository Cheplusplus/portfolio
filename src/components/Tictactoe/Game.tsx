import { Dispatch, useState, SetStateAction, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Header from "./Header";
import Tile from "./Tile";
import { useCheckGameOver } from "../../lib/useCheckGameOver";
import Modal from "./Modal";

type Scores = {
  p1Score: number;
  p2Score: number;
  drawScore: number;
};

interface GameProps {
  isCrosses: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  cpuEnabled: boolean;
}
const Game = ({ isCrosses, setIsPlaying, cpuEnabled }: GameProps) => {
  const [isCrossesTurn, setIsCrossesTurn] = useState(true);
  const [grid, setGrid] = useState<("" | "X" | "O")[]>(Array(9).fill(""));
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [drawScore, setDrawScore] = useState(0);
  const [clickedTiles, setClickedTiles] = useState<number[]>([]);
  const [reset, setReset] = useState(false);
  const [resetModal, setResetModal] = useState(false);
  const [newGameModal, setNewGameModal] = useState(false);

  const isCompleted = useCheckGameOver(grid);

  const scores: Scores = {
    p1Score: p1Score,
    p2Score: p2Score,
    drawScore: drawScore,
  };

  useEffect(() => {
    if (((isCrosses && !isCrossesTurn) || (!isCrosses && isCrossesTurn)) && !isCompleted && cpuEnabled) {
      playCpuMove();
    }
  }, [isCrossesTurn, reset]);

  useEffect(() => {
    if (isCompleted) {
      setNewGameModal(true);
      incrementScore();
    }
  }, [isCompleted]);

  useEffect(() => {
    if (!isCompleted && clickedTiles.length === 9) incrementDraw();
  }, [clickedTiles]);

  const incrementScore = () => {
    (isCrosses && isCrossesTurn) || (!isCrosses && !isCrossesTurn) ? setP2Score(p2Score + 1) : setP1Score(p1Score + 1);
  };

  const incrementDraw = () => {
    setDrawScore(drawScore + 1);
    setNewGameModal(true);
  };

  const resetGame = (fullReset: boolean) => {
    if (fullReset) {
      setP1Score(0);
      setP2Score(0);
      setDrawScore(0);
    }
    setGrid(Array(9).fill(""));
    setClickedTiles([]);
    setIsCrossesTurn(true);
    setReset(true);
  };

  const tileClicked = (id: number) => {
    setClickedTiles([...clickedTiles, id]);
    grid[id - 1] = isCrossesTurn ? "X" : "O";
    setGrid(grid);
    setIsCrossesTurn(!isCrossesTurn);
  };

  const playCpuMove = () => {
    const v = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const getUnclicked = () => {
      return v.filter((e) => {
        return !clickedTiles.includes(e);
      });
    };
    tileClicked(getUnclicked()[Math.floor(Math.random() * getUnclicked().length)]);
  };

  return (
    <>
      <Header setResetModal={setResetModal} isCrossesTurn={isCrossesTurn} />
      <div className="grid-container">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Tile id={i + 1} isCrossesTurn={isCrossesTurn} tileClicked={tileClicked} clickedTiles={clickedTiles} reset={reset} setReset={setReset} key={i} />
          ))}
      </div>

      <Scoreboard scores={scores} isCrosses={isCrosses} />
      {newGameModal ? (
        <Modal
          content={<></>}
          buttonFns={{
            fn1: () => setIsPlaying(false),
            fn2: () => {
              resetGame(false);
              setNewGameModal(false);
            },
          }}
          buttonText={{ btn1: "End Game", btn2: "Play Again" }}
        />
      ) : null}
      {resetModal ? (
        <Modal
          content={<></>}
          buttonFns={{
            fn1: () => {
              setResetModal(false);
            },
            fn2: () => {
              resetGame(true);
              setResetModal(false);
            },
          }}
          buttonText={{ btn1: "Cancel", btn2: "Reset Game" }}
        />
      ) : null}
    </>
  );
};

export default Game;
