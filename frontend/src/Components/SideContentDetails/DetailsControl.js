import style from "./DetailsControl.module.css";

const DetailsControl = (props) => {
  return (
    <li
      className={style.detailsControl}
      onClick={props.onClick}
      style={props.style}
    >
      <div className={style.detailsLogoButton}>{props.logo}</div>
      <span className={style.detailsControlText}>{props.children}</span>
    </li>
  );
};

export default DetailsControl;
