import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { NavLink, Outlet } from "react-router";
import bg_light from "./assets/layered-peaks-haikei(2).svg";
import bg_dark from "./assets/layered-peaks-haikei(1).svg";
import Modal from "./components/Modal/Modal";
import { AnimatePresence } from "motion/react";
import { Analytics } from "@vercel/analytics/next";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div
      style={{
        backgroundImage: `url("${theme === "light" ? bg_light : bg_dark}")`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div data-theme={theme} id="container">
        <Header setTheme={setTheme} openModal={openModal} />

        <AnimatePresence>
          {modalOpen && (
            <Modal closeModal={closeModal}>
              <div className="flex-item">
                <nav className="nav-container-modal">
                  <li>
                    <NavLink to={"/"} onClick={closeModal}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"projects"} onClick={closeModal}>
                      Projects
                    </NavLink>
                  </li>
                  {/* <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li> */}
                  <li>
                    <button id="theme-toggle-modal" onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}>
                      <svg className="theme-toggle" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle">
                        <title id="nightModeIconTitle">Night Mode</title> <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z" /> <path d="M12 5V3M12 21v-2" />
                        <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z" />
                      </svg>
                    </button>
                  </li>
                </nav>
              </div>
            </Modal>
          )}
        </AnimatePresence>
        <Outlet />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
