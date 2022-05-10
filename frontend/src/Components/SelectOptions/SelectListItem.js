import style from "./SelectListItem.module.css";

const SelectListItem = (props) => {
    return (
        <li className={style.selectListItem} onClick={props.onClick}>
            {props.children}
        </li>
    )
}

export default SelectListItem;