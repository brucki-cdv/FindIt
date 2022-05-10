import style from "./SideContentReports.module.css";
import SideContentHeader from "../SideContent/SideContentHeader";
import SideContentBody from "../SideContent/SideContentBody";
import SideContentFilters from "../SideContent/SideContentFilters";
import Title from "../Title";
import Searchbar from "../Searchbar";
import FilterButton from "../FilterButton";
import ReportCard from "..//ReportCard";
import SelectItem from "../SelectOptions/SelectItem";
import SideContentReportDetails from "../SideContentReportDetails";
import dataService from "../../Services/data.service";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

const SideContentReports = ({ onClickFilter, init }) => {
  const { isAllReportsActive, isDetailsActivated } = useSelector(
    (state) => state.sideContent
  );
  const [reports, setReports] = useState([]);
  const dispatch = useDispatch();
  console.log("HASMORE = ", init.hasMore);

  const fetchData = async () => {
    await dataService.getReports(6, init.page).then((val) => {
      console.log("FETCH DATA = ", val.data.reports);
      if (val.data.reports.rows.length === 0) {
        setReports([...reports, val.data.reports.rows]);
        init.setHasMore(false);
      } else {
        init.setPage(init.page + 1);
        init.setNotes([...reports, ...val.data.reports.rows]);
      }
    });
  };

  useEffect(() => {
  
    dataService.getReports(6, 0).then((val) => {
      setReports(val.data.reports.rows);
    });
  }, []);

  const displayReportCard = () => {
    console.log("LENGTH =", init.reports.length);
    return (
      <div id={style.scrollableDiv}>
        <InfiniteScroll
          dataLength={init.reports.length}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {init.reports.map((report) => {
            return (
              <ReportCard
                title={report.title}
                status={report.ReportCategory.reportCategory}
                date={report.createdAt}
                onClick={() => {
                  dispatch({ type: "DETAILS_ACTIVATED", payload: report.id });
                }}
                src={report.ReportImages.map((image) => {
                  return image.url;
                })}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    );
  };

  return (
    <div
      className={`${style.sideContentReports}  ${
        isAllReportsActive && style.active
      }`}
    >
      <SideContentHeader>
        <Title>All Reports</Title>
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
          <SideContentReportDetails />
        ) : (
          displayReportCard()
        )}
      </SideContentBody>
    </div>
  );
};

export default SideContentReports;
