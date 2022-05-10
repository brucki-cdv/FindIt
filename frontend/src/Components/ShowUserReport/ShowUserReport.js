import style from "./ShowUserReport.module.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import InputField from "../InputField";
import TextArea from "../TextArea";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ReactMapGl, { Marker } from "react-map-gl";

export default function ShowUserReport({closeModal}) {
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
          <ModalTitle>User Information</ModalTitle>
          <ModalControlItem onClick={closeModal}>
            <IoClose size={30} />
          </ModalControlItem>
        </ModalHeader>
        <ModalBody>
          <div className={style.inputs}>
            <InputField
              type="text"
              label="Title"
              placeholder="Title"
              name="title"
            />
            <InputField
              type="date"
              label="Date"
              placeholder="Date"
              name="date"
            />
            <TextArea label="Description" name="description" />
          </div>
          <div className={style.mapBox}>
            <ReactMapGl
              mapboxAccessToken="pk.eyJ1IjoiYmFydGVramVzdGVtIiwiYSI6ImNsMWF5dGI1cjAzYjkzZGw1dDhya2tpMTQifQ.wsEI0FtuW4stiEeVQx8lpQ"
              {...viewPort}
              mapStyle="mapbox://styles/bartekjestem/cl1azlx5y001014p4teuddq9f"
              height="100vh"
              cursor="pointer"
              onMove={(evt) => setViewPort(evt.viewState)}
            >
              
            </ReactMapGl>
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
}
