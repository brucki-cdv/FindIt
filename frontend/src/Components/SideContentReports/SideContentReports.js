import style from "./SideContentReports.module.css";
import SideContentHeader from "../SideContent/SideContentHeader";
import SideContentBody from "../SideContent/SideContentBody";
import Title from "../Title";
import Searchbar from "../Searchbar";
import FilterButton from "../FilterButton";
import ReportCard from "..//ReportCard";
const SideContentReports = (props) => {
  return (
    <div className={style.sideContentReports}>
      <SideContentHeader>
        <Title>All Reports</Title>
        <div className={style.controls}>
          <Searchbar placeholder="Type your city" />
          <FilterButton style={{ marginLeft: "16px" }} />
        </div>
      </SideContentHeader>
      <SideContentBody>
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </SideContentBody>
    </div>
  );
};

export default SideContentReports;
