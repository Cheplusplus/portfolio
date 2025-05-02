import { useState } from "react";
import PaymentForm from "./PaymentForm.tsx";
import Success from "./Success.js";
import colorCard from "../../assets/colorCard.svg";
import greyCard from "../../assets/greyCard.svg";
import stripes from "../../assets/stripes.svg";
import { cardNumberFormatter } from "../../lib/formatters.ts";
import "./paymentform.css";
import { motion } from "motion/react";

let uiState = {
  name: "",
  cardNumber: "",
  month: "",
  year: "",
  cvc: "",
};

/**
 * Gets passed down to Payment form to update the uiState variables for display.
 * @param {string} key
 * @param {string} value
 */
const updateUI = (key: "name" | "cardNumber" | "month" | "year" | "cvc", value: string) => {
  uiState[key] = value;
};
type Message = {
  recipient: string;
  text: string;
};
const Container = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  /**
   * @param {string} inputID
   * @returns
   */
  const clearRecipientsMessages = (inputID: string) => {
    setMessages((msgs) => msgs.filter((msg) => msg.recipient !== inputID));
  };

  return (
    <div className="page-content">
      <h2 className="main-text">NEED A STYLISH CHECKOUT?</h2>
      <div className="payment-container flex-box">
        <div className="cards-container">
          <motion.div initial={{ x: "-50px" }} animate={{ x: 0 }} className="colorCardContainer">
            <img src={colorCard} className="colorCard" />
            <p className="card-number card-text">{cardNumberFormatter(uiState.cardNumber.padEnd(16, "0"))}</p>
            <p className="card-name card-text">{uiState.name === "" ? "Jane Appleseed" : uiState.name}</p>
            <p className="date card-text">
              {uiState.month.padStart(2, "0")}/{uiState.year.padStart(2, "0")}
            </p>
          </motion.div>
          <motion.div initial={{ x: "50px" }} animate={{ x: 0 }} className="greyCardContainer">
            <img src={greyCard} className="greyCard" />
            <img src={stripes} className="stripes" />
            <p className="cvc-ui card-text">{uiState.cvc.padEnd(3, "0")}</p>
          </motion.div>
        </div>
        <div className="payment-content">{!paymentSuccess ? <PaymentForm messages={messages} setMessages={setMessages} clearMessages={clearRecipientsMessages} paymentSucceeded={setPaymentSuccess} updateUI={updateUI} /> : <Success />}</div>
      </div>
    </div>
  );
};

export default Container;
