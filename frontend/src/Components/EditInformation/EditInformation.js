import style from "./EditInformation.module.css";
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
import ReactMapGl, { Marker } from "react-map-gl";

const EditInformation = ({ closeModal, init }) => {
  

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit Information</ModalTitle>
          <ModalControls>
            <ModalControlItem
              disabled={!init.isValid}
              onClick={init.handleReportUpdate}
            >
              <AiOutlineEdit size={30} />
            </ModalControlItem>
            <ModalControlItem>
              <IoClose size={30} onClick={closeModal} />
            </ModalControlItem>
          </ModalControls>
        </ModalHeader>
        <ModalBody>
          <div className={style.inputs}>
            <InputField
              type="file"
              label="Enter Photos"
              placeholder="Photos"
              name="title"
              multiple
              onChange={init.onFileChange}
            />
            <InputField
              type="text"
              label="Enter Title"
              placeholder="Title"
              name="title"
              onChange={init.onTitleChange}
              value={init.title}
            />
            <InputField
              type="date"
              label="Enter Date"
              placeholder="Date"
              name="date"
              onChange={init.onDateChange}
              value={init.date}
            />
            <TextArea
              label="Enter Description"
              name="description"
              onChange={init.onDescriptionChange}
              value={init.description}
            />
          </div>
          <div className={style.mapBox}>
            <ReactMapGl
              mapboxAccessToken="pk.eyJ1IjoiYmFydGVramVzdGVtIiwiYSI6ImNsMWF5dGI1cjAzYjkzZGw1dDhya2tpMTQifQ.wsEI0FtuW4stiEeVQx8lpQ"
              {...init.viewPort}
              mapStyle="mapbox://styles/bartekjestem/cl1azlx5y001014p4teuddq9f"
              height="100vh"
              onMove={(evt) => init.setViewPort(evt.viewState)}
              onDblClick={init.handleMapClick}
              cursor="pointer"
            >
              {init.point.isCreated && (
                <Marker
                  longitude={init.point.longitude}
                  latitude={init.point.latitude}
                >
                  <div className={`${style.blob} ${style.blue}`}></div>
                </Marker>
              )}
            </ReactMapGl>
            <div className={style.mapGPSButton}>
              <GPSButtonContainer />
            </div>
            
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default EditInformation;
