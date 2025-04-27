import TimeCardHolder from "./TimeCardHolder.tsx";
import SocialIcons from "./SocialIcons.tsx";

import background from "../../assets/Rectangle.svg";
import "./countdown.css";

const Container = () => {
  return (
    <div
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
    </div>
  );
};

export default Container;
