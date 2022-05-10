import style from "./MapCardDescription.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTime, IoMdInformationCircleOutline } from "react-icons/io";

const MapCardDescription = (props) => {
  return (
    <div className={style.mapCardDescription}>
      <ul>
        <li>
          <span className={style.mapCardDescriptionIcon}>
            <IoMdInformationCircleOutline /> <span style={{marginLeft: '10px'}}>Opis </span>
          </span>
          <span className={style.mapCardDescriptionText}>
            Skradziono rower na ulicy Adam Mickiewicza w Poznaniu rowaer na nowe
            przerzutki shimano fajne felel i wgl zajebiste. Dla osoby ktora
            znajdzie ten rower bedzie nagroda w wysokosci 2 zlo.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MapCardDescription;
