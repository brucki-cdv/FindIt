import style from "./LogoButton.module.css";

import { useDispatch, useSelector } from "react-redux";

const LogoButton = (props) => {
  const { clickedButton } = useSelector((state) => state.sideContent);

  return (
    <div
      className={`${style.logoButton} ${props.isActive && style.active}`}
      onClick={props.onClick}
    >
      <span className={style.logoButtonIcon}>{props.children}</span>
    </div>
  );
};

export default LogoButton;
