import style from "./LogoButton.module.css";

const LogoButton = (props) => {
  return (
    <div className={`${style.logoButton}`}>
      <span className={style.logoButtonIcon}>{props.children}</span>
    </div>
  );
};

export default LogoButton;