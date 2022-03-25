import style from "./ReportCard.module.css";
import Wrapper from "../Wrapper";
import ReportCardImage from "./ReportCardImage";
import ReportCardTitle from "./ReportCardTitle";
import ReportCardContent from "./ReportCardContent";
import ReportCardDetailsButton from "./ReportCardDetailsButton";

const ReportCard = (props) => {
  return (
    <Wrapper style={{ padding: "10px", marginBottom: "15px" }}>
      <ReportCardContent>
        <ReportCardImage />
        <div className={style.reportCardDetails}>
          <ReportCardTitle>
            Skradziono bardzo drogi rower!! Na Łazarzu jestem giga wkurwiony
          </ReportCardTitle>
          <span className={style.reportCardLocalization}>
            ul. Hawelańska 6D/49, Poznań
          </span>
          <span className={style.reportCardLastSeen}>2021.01.10</span>
          <span className={style.reportCardStatus}>
            Status zgłoszenia
            <span className={style.reportCardStatusType}> SKRADZIONY</span>
          </span>
        </div>
      </ReportCardContent>
      <ReportCardDetailsButton />
    </Wrapper>
  );
};

export default ReportCard;
