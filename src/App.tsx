import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import PaymentContainer from "./components/PaymentForm/Container";
import CountdownContainer from "./components/Countdown/Container";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [page, setPage] = useState<"payment" | "countdown">("countdown");

  const pages = {
    countdown: <CountdownContainer />,
    payment: <PaymentContainer />,
  };
  return (
    <div data-theme={theme} id="container">
      <Header setTheme={setTheme} />
      <Background theme={theme} />
      <button onClick={() => setPage(page === "payment" ? "countdown" : "payment")}>Switch page</button>
      {pages[page]}
    </div>
  );
}

export default App;
