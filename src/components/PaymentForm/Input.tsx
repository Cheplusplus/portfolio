//@ts-check

import React, { Dispatch } from "react";
import { validate } from "../../lib/validator";

type Message = {
  recipient: string;
  text: string;
};

const createMessage = (recipient: string, text: string) => {
  const message: Message = {
    recipient: recipient,
    text: text,
  };
  return message;
};

type InputProps = {
  inputID: string;
  value: string;
  defaultValue: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  setMessages: Dispatch<React.SetStateAction<any[]>>;
  clearMessages: (inputID: string) => void;
  valueFormatter?: null | ((month: any) => any);
  maxLength?: number;
  validationFns: Function[];
  updateUI: Function | null;
};
const Input = ({ inputID, value, defaultValue, setValue, setMessages, clearMessages, valueFormatter = null, maxLength = 40, validationFns = [], updateUI = null }: InputProps) => {
  return (
    <input
      type="text"
      className={inputID}
      value={value}
      placeholder={defaultValue}
      maxLength={maxLength}
      onFocus={(e) => {
        e.target.classList.add("selected");
      }}
      onBlur={(e) => {
        valueFormatter !== null && e.target.value !== defaultValue ? setValue(valueFormatter(e.target.value)) : null;
        e.target.classList.remove("selected");
      }}
      onChange={(e) => {
        setValue((v) => e.target.value);
        updateUI !== null ? updateUI(inputID, e.target.value) : null;
        if (validationFns.length === 0) {
          return;
        }
        const res = validate(e.target.value, validationFns);
        clearMessages(inputID);
        if (res === true) {
          e.target.classList.remove("input-error");
        } else {
          res.map((error: string) => {
            const newMessage = createMessage(inputID, error);
            setMessages((msgs) => [...msgs, newMessage]);
          });
          e.target.classList.add("input-error");
        }
      }}
    />
  );
};

export default Input;
