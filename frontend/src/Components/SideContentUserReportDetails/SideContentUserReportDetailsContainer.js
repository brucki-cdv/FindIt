import SideContentUserReportDetails from "./SideContentUserReportDetails";
import dataService from "../../Services/data.service";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const SideContentUserReportDetailsContainer = (props) => {
  const { reportId } = useSelector((state) => state.sideContent);
  const [reportDetail, setReportDetail] = useState({});

  useEffect(() => {
    let isApiSubscribed = true;
    async function fetchData() {
      await dataService.getReport(reportId).then((val) => {
        if (isApiSubscribed) {
          setReportDetail(val.data.report);
        }
      });
    }

    fetchData();

    return () => {
      return () => {
        isApiSubscribed = false;
      };
    };
  }, [reportId]);

  const init = {
    reportDetail,
  };
  return <SideContentUserReportDetails init={init} />;
};

export default SideContentUserReportDetailsContainer;
