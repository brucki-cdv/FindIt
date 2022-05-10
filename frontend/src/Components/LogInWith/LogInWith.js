import style from "./LogInWith.module.css";

const LogInWith = (props) => {
  return (
    <div className={style.logInWith} onClick={props.onClick}>
      <span className={style.logInWithLogo}>{props.logo}</span>
      <span className={style.logInWithText}>{props.children}</span>
    </div>
  );
};

export default LogInWith;
