import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import bg_light from "./assets/layered-peaks-haikei(2).svg";
import bg_dark from "./assets/layered-peaks-haikei(1).svg";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  return (
    <div
      style={{
        backgroundImage: `url("${theme === "light" ? bg_light : bg_dark}")`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div data-theme={theme} id="container">
        <Header setTheme={setTheme} />
        {/* <Background theme={theme} /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
