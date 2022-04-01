import style from "./MapCard.module.css";
import MapCardControl from "./MapCardControl";
import MapCardImage from "./MapCardImage";
import MapCardDescription from "./MapCardDescription";
import MapCardButton from "./MapCardButton";

import { useDispatch, useSelector } from "react-redux";

const MapCard = (props) => {
  const { isMapCardOpen } = useSelector((state) => state.sideContent);
  const dispatch = useDispatch();

  return (
    <div className={`${style.mapCard} ${isMapCardOpen && style.mapCardOpen}`}>
      <MapCardControl onClick={() => dispatch({ type: "MAPCARD_CLOSE" })} />
      <MapCardImage />
      <MapCardDescription />
      <MapCardButton />
    </div>
  );
};

export default MapCard;
