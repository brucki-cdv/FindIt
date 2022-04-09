import style from "./DetailsInformations.module.css";

const DetailsInformations = (props) => {
    return (
        <ul className={style.detailsInformations}>{props.children}</ul>
    )
}

export default DetailsInformations;