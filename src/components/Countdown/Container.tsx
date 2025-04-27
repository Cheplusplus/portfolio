import TimeCardHolder from "./TimeCardHolder.tsx";
import SocialIcons from "./SocialIcons.tsx";

import background from "../../assets/Rectangle.svg";
import "./countdown.css";
import { motion, AnimatePresence } from "motion/react";

const Container = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{ opacity: 0 }}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          flexBasis: "50vh",
        }}
      >
        <h2 className="main-text">LAUNCHING YOUR BUSINESS?</h2>
        <TimeCardHolder />
        <SocialIcons />
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
