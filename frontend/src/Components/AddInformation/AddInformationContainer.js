import AddInformation from "./AddInformation";
import dataService from "../../Services/data.service";

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { storage } from "../../Services/firebase.service";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const AddInformationContainer = (props) => {
  const dispatch = useDispatch();
  const { reportId } = useSelector((state) => state.sideContent);
  const { userId } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();
  const [isValid, setIsValid] = useState(false);
  const [point, setPoint] = useState({
    longitude: null,
    latitude: null,
    isCreated: false,
  });

  const closeModal = () => {
    dispatch({ type: "MODAL_CLOSE" });
  };

  const onTitleChange = (e) => {
    console.log("title");
    setTitle(e.target.value);
  };

  const onDateChange = (e) => {
    console.log("date");
    setDate(e.target.value);
  };
  const onDescriptionChange = (e) => {
    console.log("descritpion");
    setDescription(e.target.value);
  };

  const validateForm = () => {
    if (
      title == "" ||
      date == undefined ||
      description == "" ||
      point.isCreated == false
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
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

  useEffect(() => {
    validateForm();
  }, [title, date, description, point.isCreated]);

  const uploadInformation = () => {
    console.log(userId);
    const newDate = new Date(date);
    const information = {
      reportId: reportId,
      userId: userId,
      title: title,
      description: description,
      date: newDate.toISOString(),
      longitude: point.longitude,
      latitude: point.latitude,
    };

    dataService
      .postUserInformation(information)
      .then(console.log("added"))
      .catch((error) => console.log(error));

      closeModal();
  };

  // const handleUpload = () => {
  //   images.map((image) => {
  //     //
  //     if (!image) return;
  //     const sotrageRef = ref(storage, `files/${image.name}`);
  //     const uploadTask = uploadBytesResumable(sotrageRef, image);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         console.log(snapshot);
  //       },
  //       (error) => console.log(error),
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           console.log("File available at", downloadURL);
  //         });
  //       }
  //     );
  //   });
  // };

  const init = {
    validateForm,
    onTitleChange,
    onDescriptionChange,
    onDateChange,
    isValid,
    handleMapClick,
    point,
    uploadInformation,
  };

  return (
    <>
      {ReactDOM.createPortal(
        <AddInformation closeModal={closeModal} init={init} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default AddInformationContainer;
