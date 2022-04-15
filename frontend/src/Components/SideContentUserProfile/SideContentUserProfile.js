import style from "./SideContentUserProfile.module.css";
import SideContentHeader from "../SideContent/SideContentHeader";
import SideContentBody from "../SideContent/SideContentBody";
import Title from "../Title";
import image from "../../Images/person.jpg";

import { useSelector } from "react-redux";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt, FaClipboardList } from "react-icons/fa";
import {BiTimeFive} from 'react-icons/bi'

const SideContentUserProfile = (props) => {
  const { isUserProfileActive } = useSelector((state) => state.sideContent);
  return (
    <div
      className={`${style.sideContentReports}  ${
        isUserProfileActive && style.active
      }`}
    >
      <SideContentHeader>
        <Title>User Profile</Title>
      </SideContentHeader>
      <SideContentBody>
        <div className={style.profileWrapper}>
          <div className={style.profileImage}>
            <img src={image} alt="user" />
          </div>
          <div className={style.profileName}>Katarzyna Nowak</div>
          <div className={style.informations}>
            <ul>
              <li>
               <AiOutlineMail style={{color: 'grey'}}/>
                <span className={style.profileText}>knowak@gmail.com</span>
              </li>
              <li>
                <AiOutlinePhone style={{color: 'grey'}}/>
                <span>765123089</span>
              </li>
              <li>
                <FaMapMarkerAlt style={{color: 'grey'}}/>
                <span>Poznań</span>
              </li>
              <li>
                <BiTimeFive style={{color: 'grey'}}/>
                <span>2020-01-01</span>
              </li>
              <li>
                <FaClipboardList style={{color: 'grey'}}/>
                <span>12</span>
              </li>
            
            </ul>
          </div>
        </div>
      </SideContentBody>
    </div>
  );
};

export default SideContentUserProfile;
