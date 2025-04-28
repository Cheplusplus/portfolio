import bg_light from "../../assets/layered-peaks-haikei(2).svg";
import bg_dark from "../../assets/layered-peaks-haikei(1).svg";
import "./background.css";

type BackgroundProps = {
  theme: "light" | "dark" | "system";
};
function Background({ theme }: BackgroundProps) {
  return <>{theme === "light" ? <img className="bg_img" src={bg_light} /> : <img className="bg_img" src={bg_dark} />}</>;
}

export default Background;
