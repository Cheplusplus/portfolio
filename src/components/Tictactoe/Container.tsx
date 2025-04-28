import Content from "./Content";
import "./tictactoe.css";
import { motion } from "motion/react";

const Container = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      exit={{ opacity: 0 }}
      style={{
        height: "100vh",
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <h2 className="main-text">BUILDING AN APP?</h2>
      <Content />
    </motion.div>
  );
};

export default Container;
