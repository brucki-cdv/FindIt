import DetailsImage from "../SideContentDetails/DetailsImage";
import DetailsTitle from "../SideContentDetails/DetailsTitle";
import DetailsControls from "../SideContentDetails/DetailsControls";
import DetailsControl from "../SideContentDetails/DetailsControl";
import DetailsInformations from "../SideContentDetails/DetailsInformations";
import DetailsInformation from "../SideContentDetails/DetailsInformation";
import UserReportCard from "../UserReportCard";
import Separator from "../Separator";

import image from "../../Images/person.jpg"

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFileText,
  AiOutlineCompass,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { useDispatch } from "react-redux";

const SideContentUserReportDetails = ({ init }) => {
  const dispatch = useDispatch();

  return (
    <>
      <DetailsImage onClick={() => dispatch({type: "SLIDESHOW_OPEN"})}>
        {init.reportDetail.ReportImages ? (
          <img
            src={init.reportDetail.ReportImages.map((image) => {
              return image.url;
            })}
            alt="bike"
          />
        ) : (
          <img src="" alt="nothing" />
        )}
      </DetailsImage>
      <DetailsTitle>{init.reportDetail.title}</DetailsTitle>
      <Separator />
      <DetailsControls style={{justifyContent: "center"}}>
        <DetailsControl
          logo={<IoMdAdd />}
          onClick={() => {
            dispatch({ type: "EDIT_INFORMATION_OPEN" });
          }}
          
        >
          Edit
        </DetailsControl>
      </DetailsControls>
      <Separator />
      <DetailsInformations>
        <DetailsInformation logo={<BsPencil size={25} />}>
          {init.reportDetail.description}
        </DetailsInformation>
        <DetailsInformation logo={<FaMapMarkerAlt size={25} />}>
          ul. Adama Mickiewicza 21/6
        </DetailsInformation>
        <DetailsInformation logo={<MdOutlineWatchLater size={25} />}>
          {init.reportDetail.createdAt}
        </DetailsInformation>
        <DetailsInformation logo={<AiOutlineCompass size={25} />}>
          {init.reportDetail.ReportLocation &&
          init.reportDetail.ReportLocation.latitude
            ? init.reportDetail.ReportLocation.latitude
            : "print something for missing title"}{" "}
          {init.reportDetail.ReportLocation &&
          init.reportDetail.ReportLocation.longitude
            ? init.reportDetail.ReportLocation.longitude
            : "print something for missing title"}
        </DetailsInformation>
      </DetailsInformations>
      <Separator />
      <UserReportCard image={image} title="test test test test" date="2020-01-20" description="Welcome dupa dupa"/>

    </>
  );
};

export default SideContentUserReportDetails;
