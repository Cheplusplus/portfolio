import styles from "./card.module.css";
import { motion } from "motion/react";
import { JSX } from "react/jsx-runtime";

type CardProps = {
  isLeft?: boolean;
  children: JSX.Element | JSX.Element[];
  isRow?: boolean;
  isCenter?: boolean;
};
const Card = ({ isLeft = false, children, isRow, isCenter }: CardProps) => {
  return (
    <motion.div initial={{ x: isLeft ? "-60px" : "60px" }} animate={{ x: 0 }} className={`${!isLeft ? styles.card_right : styles.card_left} ${isRow ? styles.flex_row : null} ${isCenter ? styles.isCenter : null}`}>
      {children}
    </motion.div>
  );
};

export default Card;
