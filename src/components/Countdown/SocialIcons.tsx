import pintrestLogo from "../../assets/Path(1).svg";
import instagramLogo from "../../assets/Shape.svg";
import facebookLogo from "../../assets/Path.svg";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <img className="social-logo" src={facebookLogo}></img>
      <img className="social-logo" src={pintrestLogo}></img>
      <img className="social-logo" src={instagramLogo}></img>
    </div>
  );
};

export default SocialIcons;
