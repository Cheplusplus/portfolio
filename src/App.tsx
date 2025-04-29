import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  return (
    <div>
      <div data-theme={theme} id="container">
        <Header setTheme={setTheme} />
        <Background theme={theme} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
