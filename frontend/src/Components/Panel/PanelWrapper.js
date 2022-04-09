import style from "./PanelWrapper.module.css";

const PanelWrapper = (props) => {
    return (
        <div className={style.panelWrapper} style={props.style}>
            {props.children}
        </div>
    )
}

export default PanelWrapper;