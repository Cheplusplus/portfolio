import { Dispatch, SetStateAction } from "react";
import resetButton from "../../assets/Reset-Button.svg";
import { motion } from "motion/react";

interface ResetButtonProps {
  setResetModal: Dispatch<SetStateAction<boolean>>;
}

const ResetButton = ({ setResetModal }: ResetButtonProps) => {
  return (
    <motion.div initial={{ x: "30px" }} animate={{ x: 0 }} className="flex-3 reset-container">
      <input type="image" onClick={() => setResetModal(true)} src={resetButton} />
    </motion.div>
  );
};

export default ResetButton;
