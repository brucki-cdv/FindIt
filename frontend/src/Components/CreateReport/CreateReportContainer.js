import CreateReport from "./CreateReport";
import dataService from "../../Services/data.service";

import { app, storage } from "../../Services/firebase.service";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'

export default function CreateReportContainer(second) {
  let imagesUrlArr = [];
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [images, setImages] = useState([]);
  const [hasReward, setHasReward] = useState(null);
  const [rewardValue, setRewardValue] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [point, setPoint] = useState({
    longitude: null,
    latitude: null,
    isCreated: false,
  });
  const { userId } = useSelector((state) => state.auth);

  const closeModal = () => {
    dispatch({ type: "MODAL_CLOSE" });
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onHasRewardChange = (e) => {
    console.log(e);
    setHasReward(e);
  };

  const onReportTypeChange = (e) => {
    setReportType(e);
  };

  const onRewardValueChange = (e) => {
    if (e.target.value > 0) {
      setRewardValue(e.target.value);
    }
  };

  const onFileChange = (e) => {
    console.log(e);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const validateForm = () => {
    console.log("TITLE = ", title);
    console.log("DESCRIPTION = ", description);
    console.log("LONGITUDE", point.longitude);
    console.log("latitude", point.latitude);
    console.log("has reward = ", hasReward);
    if (
      title == "" ||
      description == "" ||
      point.longitude == null ||
      point.latitude == null ||
      hasReward == null ||
      reportType == null
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleUploadImage = async (image) => {
    return new Promise((resolve, reject) => {
      //
      const generatedName = "IMG_" + uuidv4();

      if (!image) return;
      const sotrageRef = ref(storage, `files/${generatedName}`);
      const uploadTask = uploadBytesResumable(sotrageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("URL  = ", downloadURL);
            imagesUrlArr.push(downloadURL);
            resolve();
          });
        }
      );
    });
  };

  const handleUploadRecord = () => {
    return new Promise((resolve, reject) => {
      dataService
        .createReport({
          categoryId: reportType,
          title: title,
          description: description,
          hasReward: hasReward,
          type: reportType,
          reward: rewardValue,
          userId: userId,
          images: imagesUrlArr,
          longitude: point.longitude,
          latitude: point.latitude,
        })
        .then(resolve())
        .catch((error) => reject(error));
    });
  };

  const handleMapClick = (event) => {
    setPoint((prevState) => {
      return {
        ...prevState,
        isCreated: true,
        longitude: event.lngLat.lng,
        latitude: event.lngLat.lat,
      };
    });
  };

  const handleReportCreate = async () => {
    Promise.all(
      images.map((image) => {
        return handleUploadImage(image);
      })
    ).then(() => {
      handleUploadRecord();
    });

    dispatch({type: "MODAL_CLOSE"});
  };

  useEffect(() => {
    validateForm();
  }, [title, description, hasReward, reportType, images, point]);

  const init = {
    closeModal,
    handleMapClick,
    handleReportCreate,
    validateForm,
    onDescriptionChange,
    onTitleChange,
    onFileChange,
    onHasRewardChange,
    onReportTypeChange,
    onRewardValueChange,
    isValid,
    point,
    title,
    description,
    hasReward,
  };

  return <CreateReport init={init} />;
}
