import style from "./ErrorFormMessage.module.css";
import { BiErrorCircle } from "react-icons/bi";

const ErrorFormMessage = (props) => {
  return (
    <div className={style.errorFormMessage}>
      <span className={style.errorFormMessageIcon}>
        <BiErrorCircle size={22}/>
      </span>
      <span className={style.errorFormMessageText}>{props.children}</span>
    </div>
  );
};

export default ErrorFormMessage;
