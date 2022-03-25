import style from "./SideContentHeader.module.css";

const SideContentHeader = (props) => {
    return (
        <div className={style.sideContentHeader}>
           {props.children}
        </div>
    )
}

export default SideContentHeader;