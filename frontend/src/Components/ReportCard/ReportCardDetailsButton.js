import style from "./ReportCardDetailsButton.module.css";
import { AiFillEye } from "react-icons/ai";

const ReportCardDetailsButton = (props) => {
  return (
    <div className={style.reportCardDetailsButton}>
      <span className={style.reportCardDetailsButtonIcon}>
        <AiFillEye />
      </span>
    </div>
  );
};

export default ReportCardDetailsButton;
