import style from "./MapCardButton.module.css";
import { MdOutlineExpandLess } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const MapCardButton = (props) => {
  const { isMapCardOptionsExpanded } = useSelector(
    (state) => state.sideContent
  );

  const dispatch = useDispatch();

  const clickHandler = () => {
    if (isMapCardOptionsExpanded) {
      dispatch({ type: "MAPCARD_OPTIONS_CLOSE" });
    } else {
      dispatch({ type: "MAPCARD_OPTIONS_EXPAND" });
    }
  };
  return (
    <div className={style.mapCardButton} onClick={clickHandler}>
      <span className={style.mapCardButtonText}>
        Więcej{" "}
        <MdOutlineExpandLess
          style={{ transform: "scale(1.4)", marginLeft: "4px" }}
        />
      </span>

      <div
        className={`${style.mapCardButtonExpand} ${
          isMapCardOptionsExpanded && style.mapCardButtonExpandOpen
        }`}
      >
        <ul>
          <li>
            <span className={style.mapCardButtonExpandIcon}>
              <AiOutlineMail />
            </span>
            Napisz maila
          </li>
          <li>
            <span className={style.mapCardButtonExpandIcon}>
              <IoCallOutline />
            </span>
            Zadzwoń
          </li>
          <li>
            <span className={style.mapCardButtonExpandIcon}>
              <IoAddOutline />
            </span>
            Dodaj Informacje
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MapCardButton;
