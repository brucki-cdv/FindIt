import style from "./SideContentBody.module.css"

const SideContentBody = (props) => {
    return (
        <div className={style.sideContentBody} style={props.style}>
            {props.children}
        </div>
    )
}

export default SideContentBody;