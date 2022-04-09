import style from "./DetailsImage.module.css";

const DetailImage = (props) => {
    return (
        <div className={style.detailsImage}>{props.children}</div>
    )
}

export default DetailImage;