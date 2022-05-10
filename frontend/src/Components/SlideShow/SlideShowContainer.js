import SlideShow from "./SlideShow";

import dataService from "../../Services/data.service";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const SlideShowContainer = (props) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [reloadSlideshow, setReloadSlideshow] = useState(false);
  const { reportId } = useSelector((state) => state.sideContent);

  const getReportImages = async () => {
    await dataService.getReportImages(reportId).then((val) => {
      setImages(val.data.reportImages);
    });
  };

  const closeSlideshow = () => {
    dispatch({ type: "MODAL_CLOSE" });
  };

  const deleteImage = async (reportId) => {
    console.log("delete!");
    await dataService.deleteReportImage(reportId);
    setReloadSlideshow(true);
  };
  useEffect(() => {
    getReportImages();

    return () => {
      setReloadSlideshow(false);
    };
  }, [reloadSlideshow]);

  return (
    <>
      {ReactDOM.createPortal(
        <SlideShow
          images={images}
          showControls={true}
          onDeleteClick={deleteImage}
          onCloseClick={closeSlideshow}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default SlideShowContainer;
