import { Dispatch, SetStateAction } from "react";
import resetButton from "../../assets/Reset-Button.svg";

interface ResetButtonProps {
  setResetModal: Dispatch<SetStateAction<boolean>>;
}

const ResetButton = ({ setResetModal }: ResetButtonProps) => {
  return (
    <div className="flex-3 reset-container">
      <input type="image" onClick={() => setResetModal(true)} src={resetButton} />
    </div>
  );
};

export default ResetButton;
