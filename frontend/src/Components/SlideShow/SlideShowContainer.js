import SlideShow from "./SlideShow";
import ReactDOM from "react-dom";


const SlideShowContainer = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <SlideShow />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default SlideShowContainer;
