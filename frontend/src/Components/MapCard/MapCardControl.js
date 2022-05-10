import { IoMdClose } from "react-icons/io";
import style from "./MapCardControl.module.css";

const MapCardControl = (props) => {
    return (
        <span className={style.mapCardControl} onClick={props.onClick}>
            <IoMdClose />
        </span>
    )
}

export default MapCardControl