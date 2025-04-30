import { useState } from "react";
import PaymentContainer from "../components/PaymentForm/Container";
import CountdownContainer from "../components/Countdown/Container";
import TicTacToeContainer from "../components/Tictactoe/Container";
import Profile from "../components/Profile/Container";
// import Arrows from "../components/Arrows/Arrows";
import { useSwipeable } from "react-swipeable";

function Home() {
  const [page, setPage] = useState<"payment" | "countdown" | "tictactoe" | "profile">("profile");

  const handlers = useSwipeable({
    onSwipedLeft: () => setPage("tictactoe"),
  });

  const pages = {
    countdown: <CountdownContainer />,
    payment: <PaymentContainer />,
    tictactoe: <TicTacToeContainer />,
    profile: <Profile />,
  };
  return (
    <>
      {/* <Arrows setPage={setPage} /> */}
      <div {...handlers} id="page-container">
        {pages[page]}
      </div>
    </>
  );
}

export default Home;
