import style from "./SideContentFilters.module.css";

const SideContentFilters = (props) => {
    return (
        <div className={style.sideContentFilters}>
            {props.children}
        </div>
    )
}

export default SideContentFilters