import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import PaymentContainer from "./components/PaymentForm/Container";
import CountdownContainer from "./components/Countdown/Container";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  return (
    <div data-theme={theme} id="container">
      <Header setTheme={setTheme} />
      <Background theme={theme} />
      <PaymentContainer />
      {/* <CountdownContainer /> */}
    </div>
  );
}

export default App;
