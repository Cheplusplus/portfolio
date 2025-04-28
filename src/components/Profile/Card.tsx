import styles from "./profile.module.css";
import { motion } from "motion/react";
import { JSX } from "react/jsx-runtime";

type CardProps = {
  isLeft: boolean;
  children: JSX.Element | JSX.Element[];
};
const Card = ({ isLeft, children }: CardProps) => {
  return (
    <motion.div initial={{ x: isLeft ? "-60px" : "60px" }} animate={{ x: 0 }} className={isLeft ? styles.card_container : styles.card_left}>
      {children}
    </motion.div>
  );
};

export default Card;
