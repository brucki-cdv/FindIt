import style from "./SideContentUserReports.module.css";
import SideContentHeader from "../SideContent/SideContentHeader";
import SideContentBody from "../SideContent/SideContentBody";
import SideContentFilters from "../SideContent/SideContentFilters";
import Title from "../Title";
import Searchbar from "../Searchbar";
import FilterButton from "../FilterButton";
import ReportCard from "../ReportCard";
import SelectItem from "../SelectOptions/SelectItem";
import SideContentUserReportDetails from "../SideContentUserReportDetails";

import { useSelector, useDispatch } from "react-redux";

const SideContentUserReports = ({ onClickFilter, init }) => {
  const { isUserReportsActive, isDetailsActivated } = useSelector(
    (state) => state.sideContent
  );
  const dispatch = useDispatch();
  const displayReportCard = () => {
    return init.userReports.map((userReport) => {
      return (
        <>
          <ReportCard
            title={userReport.title}
            status={userReport.ReportCategory.reportCategory}
            date={userReport.createdAt}
            onClick={() => {
              dispatch({ type: "DETAILS_ACTIVATED", payload: userReport.id });
            }}
            src={userReport.ReportImages.map((image) => {
              return image.url;
            })}
          />
        </>
      );
    });
  };

  return (
    <div
      className={`${style.sideContentReports}  ${
        isUserReportsActive && style.active
      }`}
    >
      <SideContentHeader>
        <Title>User Reports</Title>
        <div className={style.controls}>
          <Searchbar
            placeholder="Type your city"
            onChange={init.onChangeSearchbar}
          />
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
            onChange={init.onChangeHasReward}
          />
          <SelectItem
            options={[
              { value: "Missing", name: "Missing" },
              { value: "Stolen", name: "Stolen" },
            ]}
            defaultValue="Type"
            label="Type:"
            onChange={init.onChangeType}
          />
          <SelectItem
            options={[
              { value: "<1.5km", name: "<1.5km" },
              { value: ">1.5km", name: ">1.5km" },
            ]}
            defaultValue="Distance"
            label="Distance:"
            onChange={init.onChangeDistance}
          />
        </SideContentFilters>
      </SideContentHeader>
      <SideContentBody>
        {isDetailsActivated ? (
          <SideContentUserReportDetails />
        ) : (
          displayReportCard()
        )}
      </SideContentBody>
    </div>
  );
};

export default SideContentUserReports;
