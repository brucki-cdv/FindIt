import SideContentReportDetails from "./SideContentReportDetails";
import dataService from "../../Services/data.service";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const SideContentReportDetailsContainer = () => {
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

  return <SideContentReportDetails init={init} />;
};

export default SideContentReportDetailsContainer;
