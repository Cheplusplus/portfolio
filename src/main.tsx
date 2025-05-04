import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import { Analytics } from "@vercel/analytics/react";
import ProfileContainer from "./components/Profile/Container.tsx";
import CountDownContainer from "./components/Countdown/Container.tsx";
import PaymentContainer from "./components/PaymentForm/Container.tsx";
import GameContainer from "./components/Tictactoe/Container.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<Home />}>
            <Route index element={<ProfileContainer />} />
            <Route path="/countdown-timer" element={<CountDownContainer />} />
            <Route path="/checkout" element={<PaymentContainer />} />
            <Route path="/tictactoe" element={<GameContainer />} />
          </Route>
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
