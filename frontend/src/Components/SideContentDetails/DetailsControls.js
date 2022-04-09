import style from "./DetailsControls.module.css";

const DetailsControls = (props) => {
    return (
        <ul className={style.detailsControls}>{props.children}</ul>
    )
}

export default DetailsControls;