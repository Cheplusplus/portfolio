import { useState } from "react";
import PaymentContainer from "../components/PaymentForm/Container";
import CountdownContainer from "../components/Countdown/Container";
import TicTacToeContainer from "../components/Tictactoe/Container";
import Profile from "../components/Profile/Container";
import Arrows from "../components/Arrows/Arrows";
import { useSwipeable } from "react-swipeable";

const pageNames: ["profile", "payment", "countdown", "tictactoe"] = ["profile", "payment", "countdown", "tictactoe"];

function Home() {
  const [page, setPage] = useState<"payment" | "countdown" | "tictactoe" | "profile">("profile");

  const gotoNextPage = () => {
    if (pageNames.indexOf(page) + 1 >= pageNames.length) {
      setPage("profile");
      return;
    }
    const nextPage = pageNames[pageNames.indexOf(page) + 1];
    setPage(nextPage);
  };

  const gotoPrevPage = () => {
    if (pageNames.indexOf(page) - 1 < 0) {
      setPage("tictactoe");
      return;
    }
    const nextPage = pageNames[pageNames.indexOf(page) - 1];
    setPage(nextPage);
  };

  const handlers = useSwipeable({
    onSwipedLeft: gotoNextPage,
    onSwipedRight: gotoPrevPage,
  });

  const pages = {
    countdown: <PaymentContainer />,
    payment: <CountdownContainer />,
    tictactoe: <TicTacToeContainer />,
    profile: <Profile />,
  };

  return (
    <>
      <Arrows gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
      <div {...handlers} id="page-container">
        {pages[page]}
      </div>
    </>
  );
}

export default Home;
