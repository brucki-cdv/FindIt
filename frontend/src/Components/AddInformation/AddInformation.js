import style from "./AddInformation.module.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import InputField from "../InputField";
import TextArea from "../TextArea";
import MapBox from "../MapBox";

import { IoClose } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";
const AddInformation = (props) => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add Information</ModalTitle>
          <ModalControls>
            <ModalControlItem>
              <IoClose size={30} />
            </ModalControlItem>
            <ModalControlItem>
              <IoMdSave size={30} />
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
            />
            <InputField
              type="date"
              label="Enter Date"
              placeholder="Date"
              name="date"
            />
            <TextArea label="Enter Description" name="description" />
          </div>
          <div className={style.mapBox}>
            <MapBox />
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default AddInformation;
