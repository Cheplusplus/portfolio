import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import PaymentContainer from "./components/PaymentForm/Container";
import CountdownContainer from "./components/Countdown/Container";
import TicTacToeContainer from "./components/Tictactoe/Container";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [page, setPage] = useState<"payment" | "countdown" | "tictactoe">("payment");

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
  };
  return (
    <div data-theme={theme} id="container">
      <Header setTheme={setTheme} />
      <Background theme={theme} />

      {pages[page]}
    </div>
  );
}

export default App;
