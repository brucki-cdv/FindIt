import style from "./LogoButton.module.css";

const LogoButton = (props) => {
  return (
    <div
      className={`${style.logoButton} ${style.active}`}
      onClick={props.onClick}
    >
      <span className={style.logoButtonIcon}>{props.children}</span>
    </div>
  );
};

export default LogoButton;
