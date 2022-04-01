import style from "./SideContentReports.module.css";
import SideContentHeader from "../SideContent/SideContentHeader";
import SideContentBody from "../SideContent/SideContentBody";
import SideContentFilters from "../SideContent/SideContentFilters";
import Title from "../Title";
import Searchbar from "../Searchbar";
import FilterButton from "../FilterButton";
import ReportCard from "..//ReportCard";
import SelectItem from "../SelectOptions/SelectItem";

const SideContentReports = ({ reports, onClickFilter }) => {
  const displayReportCard = () => {
    return reports.map((report) => {
      return (
        <ReportCard
          title={report.title}
          status={report.ReportCategory.reportName}
          date="2020-01-01"
          location="ul. Adama Mickiewicza"
        />
      );
    });
  };

  return (
    <div className={`${style.sideContentReports}  ${style.active}`}>
      <SideContentHeader>
        <Title>All Reports</Title>
        <div className={style.controls}>
          <Searchbar placeholder="Type your city" />
          <FilterButton
            style={{ marginLeft: "16px" }}
            onClick={onClickFilter}
          />
        </div>
        <SideContentFilters>
          <SelectItem
            options={[
              { value: "Yes", name: "Yes" },
              { value: "No", name: "No" },
            ]}
            defaultValue="Reward"
            label="Has Reward:"
          />
          <SelectItem
            options={[
              { value: "Missing", name: "Missing" },
              { value: "Stolen", name: "Stolen" },
            ]}
            defaultValue="Type"
            label="Type:"
          />
          <SelectItem
            options={[
              { value: "<1.5km", name: "<1.5km" },
              { value: ">1.5km", name: ">1.5km" },
            ]}
            defaultValue="Distance"
            label="Distance:"
          />
        </SideContentFilters>
      </SideContentHeader>
      <SideContentBody>{/* {displayReportCard()} */}</SideContentBody>
    </div>
  );
};

export default SideContentReports;
