import { useState } from "react";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import PaymentContainer from "./components/PaymentForm/Container";
import CountdownContainer from "./components/Countdown/Container";
import TicTacToeContainer from "./components/Tictactoe/Container";
import Profile from "./components/Profile/Container";
import Arrows from "./components/Arrows/Arrows";

function Home() {
  const [theme, setTheme] = (useState < "light") | "dark" | ("system" > "light");
  const [page, setPage] = (useState < "payment") | "countdown" | "tictactoe" | ("profile" > "profile");

  const pages = {
    countdown: <CountdownContainer />,
    payment: <PaymentContainer />,
    tictactoe: <TicTacToeContainer />,
    profile: <Profile />,
  };
  return (
    <div data-theme={theme} id="container">
      <Header setTheme={setTheme} />
      <Background theme={theme} />
      <div id="page-container">{pages[page]}</div>
      <Arrows setPage={setPage} />
    </div>
  );
}

export default Home;
