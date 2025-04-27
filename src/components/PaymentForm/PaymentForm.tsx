import React, { Dispatch } from "react";
import { useState } from "react";
import { isOnlyNumbers, isOnlyLetters, cannotBeBlank, isLen3 } from "../../lib/inputValidators";
import { validate } from "../../lib/validator";
import Input from "./Input";
import Messages from "./Messages";

import { checkSum } from "../../lib/luhn";
import { cardNumberFormatter, monthFormatter } from "../../lib/formatters";

const JSONFileURL = "mock_server.json";

type Message = {
  recipient: string;
  text: string;
};

type Item = {
  id: "name" | "cardNumber" | "month" | "year" | "CVC";
  value: string;
  validatorFns: Function[];
};

const createMessage = (recipient: string, text: string) => {
  const message: Message = {
    recipient: recipient,
    text: text,
  };
  return message;
};

const inputItem = (id: "name" | "cardNumber" | "month" | "year" | "CVC", value: string, validatorFns: Function[]) => {
  const item: Item = {
    id: id,
    value: value,
    validatorFns: validatorFns,
  };
  return item;
};

type PaymentFormProps = {
  messages: Message[];
  setMessages: Dispatch<React.SetStateAction<any[]>>;
  clearMessages: (inputID: string) => void;
  paymentSucceeded: Dispatch<React.SetStateAction<boolean>>;
  updateUI: Function | null;
};
const PaymentForm = ({ messages, setMessages, clearMessages, paymentSucceeded, updateUI }: PaymentFormProps) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVC, setCVC] = useState("");

  type FormData = {
    name: string;
    cardNumber: string;
    month: string;
    year: string;
    CVC: string;
  };
  const handleSubmit = (inputItems: Item[]) => {
    const newMessages: Message[] = [];
    let JSONData: FormData = { name, cardNumber, month, year, CVC };
    inputItems.map((item) => {
      clearMessages(item.id);
      JSONData[item.id] = item.value;
      const res = validate(item.value, item.validatorFns);
      res === true ? null : res.map((msg: string) => newMessages.unshift(createMessage(item.id, msg)));
    });
    if (newMessages.length === 0) {
      (async () => {
        await fetch(JSONFileURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(JSONData),
        })
          .then((r) => {
            if (r.status === 200) {
              paymentSucceeded(true);
              return r.text();
            } else return "Failed to send data";
          })
          .then((r) => {
            console.log(r);
          });
      })();
    } else {
      newMessages.map((item) => {
        const element = document.querySelector(`.${item.recipient}`);
        element?.classList.add("input-error");
      });
      setMessages((msgs) => [...msgs, ...newMessages]);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const inputItems = [
          inputItem("name", name, [isOnlyLetters, cannotBeBlank]),
          inputItem("cardNumber", cardNumber, [isOnlyNumbers, cannotBeBlank, checkSum]),
          inputItem("month", month, [isOnlyNumbers, cannotBeBlank]),
          inputItem("year", year, [isOnlyNumbers, cannotBeBlank]),
          inputItem("CVC", CVC, [isOnlyNumbers, cannotBeBlank, isLen3]),
        ];
        handleSubmit(inputItems);
      }}
    >
      <label>CARDHOLDER NAME</label>
      <Input inputID="name" value={name} defaultValue="e.g. Jane Appleseed" setValue={setName} validationFns={[isOnlyLetters]} setMessages={setMessages} clearMessages={clearMessages} updateUI={updateUI} />
      <Messages messages={messages} inputID="name" />
      <label>CARD NUMBER</label>
      <Input
        inputID="cardNumber"
        value={cardNumber}
        maxLength={21}
        defaultValue="e.g. 1234 5678 9123 0000"
        setValue={setCardNumber}
        valueFormatter={cardNumberFormatter}
        validationFns={[isOnlyNumbers]}
        setMessages={setMessages}
        clearMessages={clearMessages}
        updateUI={updateUI}
      />
      <Messages messages={messages} inputID="cardNumber" />

      <div className="flex-row">
        <div>
          <label>EXP. DATE (MM/YY)</label>
          <div className="flex-col width100">
            <div className="flex-row">
              <Input inputID="month" value={month} maxLength={2} defaultValue="MM" setValue={setMonth} valueFormatter={monthFormatter} validationFns={[isOnlyNumbers]} setMessages={setMessages} clearMessages={clearMessages} updateUI={updateUI} />
              <Input inputID="year" value={year} defaultValue="YY" setValue={setYear} maxLength={2} validationFns={[isOnlyNumbers]} setMessages={setMessages} clearMessages={clearMessages} updateUI={updateUI} />
            </div>
            <Messages messages={messages} inputID="month" />
            <Messages messages={messages} inputID="year" />
          </div>
        </div>
        <div className="flex-col">
          <label>CVC</label>
          <Input inputID="cvc" value={CVC} maxLength={3} defaultValue="e.g. 123" setValue={setCVC} validationFns={[isOnlyNumbers]} setMessages={setMessages} clearMessages={clearMessages} updateUI={updateUI} />
          <Messages messages={messages} inputID="cvc" />
        </div>
      </div>
      <input type="submit" value={"Confirm"} className="submit-button" />
    </form>
  );
};

export default PaymentForm;
