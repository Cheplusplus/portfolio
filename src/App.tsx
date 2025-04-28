import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import PaymentContainer from "./components/PaymentForm/Container";
import CountdownContainer from "./components/Countdown/Container";
import TicTacToeContainer from "./components/Tictactoe/Container";
import Profile from "./components/Profile/Container";
import Arrows from "./components/Arrows/Arrows";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [page, setPage] = useState<"payment" | "countdown" | "tictactoe" | "profile">("profile");

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("oooops");
  //     setPage(page === "countdown" ? "payment" : page === "payment" ? "tictactoe" : "countdown");
  //   }, 5000);
  // }, [page]);

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

export default App;
