import style from "./SideContentBody.module.css"

const SideContentBody = (props) => {
    return (
        <div className={style.sideContentBody}>
            {props.children}
        </div>
    )
}

export default SideContentBody;