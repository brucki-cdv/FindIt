import "./SlideShow.css";
import image from "../../Images/rower.jpg";
import ModalBackdrop from "../Modal/ModalBackdrop";
import SlideshowButtons from "./SlideshowButtons";
import SlideshowDelete from "./SlideshowDelete";
import SlideshowClose from "./SlideshowClose";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SlideShow = ({ images, showControls, onDeleteClick, onCloseClick }) => {
  return (
    <ModalBackdrop>
      <div className="slideShowWrapper">
        <Carousel
          showArrows={true}
          width={"900px"}
          showThumbs={false}
          dynamicHeight={true}
        >
          {images.map((image) => {
            return (
              <div>
                <img src={image.url} />

                <SlideshowButtons>
                  {(showControls && images.length > 1) && (
                    <SlideshowDelete onClick={() => onDeleteClick(image.id)} />
                  )}
                  <SlideshowClose onClick={onCloseClick} />
                </SlideshowButtons>
              </div>
            );
          })}
        </Carousel>
      </div>
    </ModalBackdrop>
  );
};

export default SlideShow;
