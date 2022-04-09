import style from "./PanelBody.module.css";

const PanelBody = (props) => {
    return (
        <div className={style.panelBody} style={props.style}>
            {props.children}
        </div>
    )
}

export default PanelBody;