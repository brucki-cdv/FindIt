import style from "./DetailsTitle.module.css";

const DetailsTitle = (props) => {
  return <span className={style.detailsTitle}>{props.children}</span>;
};

export default DetailsTitle;
