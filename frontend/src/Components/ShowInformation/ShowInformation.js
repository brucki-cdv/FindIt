import style from "./ShowInformation.module.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import InputField from "../InputField";
import TextArea from "../TextArea";
import GPSButtonContainer from "../Buttons/GPSButton/GPSButtonContainer";

import { IoClose } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import ReactMapGl from "react-map-gl";

const ShowInformation = ({ init, closeModal }) => {
  const [viewPort, setViewPort] = useState({
    latitude: 45.1234,
    longitude: -75.6904,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Information Details</ModalTitle>
          <ModalControls>
            <ModalControlItem>
              <IoClose size={30} onClick={closeModal} />
            </ModalControlItem>
          </ModalControls>
        </ModalHeader>
        <ModalBody>
          <div className={style.inputs}>
            <InputField
              type="text"
              label="Enter Title"
              placeholder="Title"
              name="title"
              multiple
              onChange={init.onFileChange}
              disabled={true}
            />
            <InputField
              type="date"
              label="Enter Date"
              placeholder="Date"
              name="date"
              onChange={init.onDateChange}
              disabled={true}
            />
            <TextArea
              label="Enter Description"
              name="description"
              onChange={init.onDescriptionChange}
              disabled={true}
            />
          </div>
          <div className={style.mapBox}>
            <ReactMapGl
              mapboxAccessToken="pk.eyJ1IjoiYmFydGVramVzdGVtIiwiYSI6ImNsMWF5dGI1cjAzYjkzZGw1dDhya2tpMTQifQ.wsEI0FtuW4stiEeVQx8lpQ"
              {...viewPort}
              mapStyle="mapbox://styles/bartekjestem/cl1azlx5y001014p4teuddq9f"
              height="100vh"
              onMove={(evt) => setViewPort(evt.viewState)}
            ></ReactMapGl>
            <GPSButtonContainer />
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ShowInformation;
