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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 className="main-text">BUILDING AN APP?</h2>
      <Content />
      <h2 className="main-text">I BUILD MORE THAN JUST WEBSITES</h2>
    </motion.div>
  );
};

export default Container;
