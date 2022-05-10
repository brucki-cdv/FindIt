import ShowUserReport from "./ShowUserReport";

import { useDispatch } from "react-redux";

export default function ShowUserReportContainer() {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "MODAL_CLOSE" });
  };

  return <ShowUserReport closeModal={closeModal} />;
}
