import style from "./EditUserProfile.module.css";
import ModalBackdrop from "../Modal/ModalBackdrop";
import ModalContainer from "../Modal/ModalContainer";
import ModalHeader from "../Modal/ModalHeader";
import ModalControls from "../Modal/ModalControls";
import ModalControlItem from "../Modal/ModalControlItem";
import ModalTitle from "../Modal/ModalTitle";
import ModalBody from "../Modal/ModalBody";
import InputField from "../InputField";
import TextArea from "../TextArea";
import ProfileImage from "./ProfileImage";
import image from "../../Images/person.jpg";

import { IoClose } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";

export default function EditUserProfile(second) {
  return (
    <ModalBackdrop>
      <ModalContainer style={{ width: "450px" }}>
        <ModalHeader>
          <ModalTitle>Edit your profile</ModalTitle>
          <ModalControls>
            <ModalControlItem>
              <AiOutlineEdit size={30} />
            </ModalControlItem>
            <ModalControlItem>
              <IoClose size={30} />
            </ModalControlItem>
          </ModalControls>
        </ModalHeader>
        <ModalBody>
          <div className={style.userProfileBox}>
            <ProfileImage src={image} alt="profile" />
            <InputField
              type="file"
              label="Enter Photos"
              placeholder="Photos"
              name="title"
            />
            <InputField
              type="text"
              label="First Name"
              placeholder=""
              name="title"
              multiple
             
            />
            <InputField
              type="text"
              label="Last Name"
              placeholder=""
              name="title"
              multiple
             
            />
            <InputField
              type="text"
              label="Phone number"
              placeholder=""
              name="title"
              multiple
             
            />
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
}
