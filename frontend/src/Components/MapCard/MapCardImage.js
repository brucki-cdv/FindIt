import style from "./MapCardImage.module.css";
import { IoIosEye } from "react-icons/io";
const MapCardImage = (props) => {
  return (
    <div className={style.mapCardImage}>
      <span className={style.mapCardImageIcon}>
        <IoIosEye />
      </span>
      <img
        src="https://a.allegroimg.com/s512/11f251/79d1360e4b5da32b6f77da427840/ROWER-KROSS-HEXAGON-X2"
        alt="user bike"
      />
    </div>
  );
};

export default MapCardImage;
