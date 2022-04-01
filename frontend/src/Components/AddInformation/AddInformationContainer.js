import AddInformation from "./AddInformation";
import ReactDOM from "react-dom";

const AddInformationContainer = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <AddInformation />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default AddInformationContainer;
