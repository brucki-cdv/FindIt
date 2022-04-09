import SideContentReportDetails from "./SideContentReportDetails";
import dataService from "../../Services/data.service";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const SideContentReportDetailsContainer = () => {
  const { reportId } = useSelector((state) => state.sideContent);
  const [reportDetail, setReportDetail] = useState({});
  const [mounted, setMounted] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    async function fetchData() {
      await dataService.getReport(reportId).then((val) => {
        if (mounted) {
          setReportDetail(val.data.report);
        }
      });
    }

    fetchData();

    return () => {
      setMounted(false);
    };
  }, []);

  const init = {
    reportDetail,
  };

  return <SideContentReportDetails init={init} />;
};

export default SideContentReportDetailsContainer;
