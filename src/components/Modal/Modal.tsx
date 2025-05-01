import { JSX } from "react";
import styles from "./modal.module.css";
import { motion } from "motion/react";

type ModalProps = {
  closeModal: () => void;
  children: JSX.Element | JSX.Element[] | null;
};
const Modal = ({ closeModal, children }: ModalProps) => {
  return (
    <motion.div initial={{ right: "-100vw" }} animate={{ right: 0 }} exit={{ right: "100vw" }} className={styles.modal_container}>
      <div className="flex-item">
        <button className="menu-icon" onClick={closeModal}>
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M160 448a32 32 0 01-32-32V160.064a32 32 0 0132-32h256a32 32 0 0132 32V416a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V160.064a32 32 0 0132-32h255.936a32 32 0 0132 32V416a32 32 0 01-32 32H608zM160 896a32 32 0 01-32-32V608a32 32 0 0132-32h256a32 32 0 0132 32v256a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V608a32 32 0 0132-32h255.936a32 32 0 0132 32v256a32 32 0 01-32 32H608z" />
          </svg>
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default Modal;
