import style from "./PanelImage.module.css";
import image from "../../Images/doddle.png";

const PanelImage = (props) => {
    return (
        <div className={style.panelImage} style={props.style}>
            {props.children}
        </div>
    )
}

export default PanelImage;