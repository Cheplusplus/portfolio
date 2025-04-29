import { Dispatch, useEffect, useState } from "react";
import styles from "./arrow.module.css";
import { motion, AnimatePresence } from "motion/react";

type ArrowsProps = {
  setPage: Dispatch<React.SetStateAction<"payment" | "countdown" | "tictactoe" | "profile">>;
};
const Arrows = ({ setPage }: ArrowsProps) => {
  const pageNames: ["profile", "payment", "countdown", "tictactoe"] = ["profile", "payment", "countdown", "tictactoe"];
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    setPage(pageNames[pageNumber]);
  });
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.container}>
        <div
          onClick={() => {
            setPageNumber(pageNumber < pageNames.length - 1 ? pageNumber + 1 : 0);
          }}
          className={styles.arrow_container_right}
        >
          <svg className={styles.arrow_right} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
        <div
          onClick={() => {
            setPageNumber(pageNumber > 0 ? pageNumber - 1 : pageNames.length - 1);
          }}
          className={styles.arrow_container_left}
        >
          <svg className={styles.arrow_left} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Arrows;
