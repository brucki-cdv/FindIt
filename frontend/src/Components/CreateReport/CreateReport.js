import style from "./CreateReport.module.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import InputField from "../InputField";
import TextArea from "../TextArea";
import SelectItem from "../SelectOptions/SelectItem";
import GPSButtonContainer from "../Buttons/GPSButton/GPSButtonContainer";

import { IoClose } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

export default function CreateReport({ init }) {
  const [viewPort, setViewPort] = useState({
    latitude: init.point?.latitude,
    longitude: init.point?.longitude,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Create Report</ModalTitle>
          <ModalControls>
            <ModalControlItem disabled={!init.isValid} onClick={init.handleReportCreate}>
              <AiOutlineEdit size={30} />
            </ModalControlItem>
            <ModalControlItem>
              <IoClose size={30} onClick={init.closeModal} />
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
              onChange={init.onTitleChange}
            />
            <TextArea
              label="Enter Description"
              name="description"
              onChange={init.onDescriptionChange}
            />
            <SelectItem
              options={[
                { value: true, name: "Yes" },
                { value: false, name: "No" },
              ]}
              defaultValue="Reward"
              label="Has Reward:"
              onChange={init.onHasRewardChange}
            />
            {init.hasReward && (
              <InputField
                type="number"
                label="Enter reward value"
                placeholder="Reward value"
                name="reward"
                min="0"
                max="100000"
                onChange={init.onRewardValueChange}
              />
            )}

            <SelectItem
              options={[
                { value: "1", name: "Missing" },
                { value: "2", name: "Stolen" },
              ]}
              defaultValue="Type"
              label="Report type:"
              onChange={init.onReportTypeChange}
            />
            <InputField
              type="file"
              label="Enter Photos"
              placeholder="Photos"
              name="title"
              multiple
              onChange={init.onFileChange}
            />
          </div>
          <div className={style.mapBox}>
            <ReactMapGl
              mapboxAccessToken="pk.eyJ1IjoiYmFydGVramVzdGVtIiwiYSI6ImNsMWF5dGI1cjAzYjkzZGw1dDhya2tpMTQifQ.wsEI0FtuW4stiEeVQx8lpQ"
              {...viewPort}
              mapStyle="mapbox://styles/bartekjestem/cl1azlx5y001014p4teuddq9f"
              height="100%"
              onMove={(evt) => setViewPort(evt.viewState)}
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
              <div className={style.mapGPSButton}>
                <GPSButtonContainer />
              </div>
            </ReactMapGl>
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
}
