import "./SlideShow.css";
import image from "../../Images/rower.jpg";
import ModalBackdrop from "../Modal/ModalBackdrop";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SlideShow = (props) => {
  return (
    <ModalBackdrop>
      <div className="slideShowWrapper">
        <Carousel
          showArrows={true}
          width={"900px"}
          showThumbs={false}
          dynamicHeight={true}
        >
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
        </Carousel>
      </div>
    </ModalBackdrop>
  );
};

export default SlideShow;
