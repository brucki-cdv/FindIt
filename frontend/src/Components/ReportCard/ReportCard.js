import style from "./ReportCard.module.css";
import Wrapper from "../Wrapper";
import ReportCardImage from "./ReportCardImage";
import ReportCardTitle from "./ReportCardTitle";
import ReportCardContent from "./ReportCardContent";
import ReportCardDetailsButton from "./ReportCardDetailsButton";

const ReportCard = (props) => {

  
  return (
    <div className={`${style.reportCard}`} onClick={props.onClick}>
      <ReportCardContent>
        <ReportCardImage src={props.src}/>
        <div className={style.reportCardDetails}>
          <ReportCardTitle>{props.title}</ReportCardTitle>
          <span className={style.reportCardLocalization}>{props.location}</span>
          <span className={style.reportCardLastSeen}>{props.date}</span>
          <span className={style.reportCardStatus}>
            Status zgłoszenia
            <span className={style.reportCardStatusType}>{props.status}</span>
          </span>
        </div>
      </ReportCardContent>
    </div>
  );
};

export default ReportCard;
