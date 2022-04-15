import EditInformation from "./EditInformation";
import dataService from "../../Services/data.service";

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { storage } from "../../Services/firebase.service";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import moment from "moment";

const EditInformationContainer = (props) => {
  const dispatch = useDispatch();
  const { reportId } = useSelector((state) => state.sideContent);
  const [report, setReport] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");
  const [convertedDate, setConvertedDate] = useState();
  const [isValid, setIsValid] = useState(false);
  const [images, setImages] = useState([]);
  const [point, setPoint] = useState({
    longitude: null,
    latitude: null,
    isCreated: false,
  });

  const closeModal = () => {
    dispatch({ type: "MODAL_CLOSE" });
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
    setConvertedDate(() => {
      let date1 = new Date(date);
      let dateTime1 = moment(date1).format("YYYY-MM-DD");
      return dateTime1;
    });
  };
  const onDescriptionChange = (e) => {
    console.log("descritpion");
    setDescription(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
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

  const validateForm = () => {
    console.log(images.length);
    if (title == "" || date == undefined || description == "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isApiSubscribed = true;
    dataService.getReport(reportId, { signal: signal }).then((val) => {
      if (isApiSubscribed) {
        setTitle(val.data.report.title);
        setDescription(val.data.report.description);
        setDate(() => {
          let date = val.data.report.createdAt;
          let convertedDate = moment(date).format("YYYY-MM-DD");
          return convertedDate;
        });
        setPoint({
          longitude: val.data.report.ReportLocation.longitude,
          latitude: val.data.report.ReportLocation.latitude,
          isCreated: true
        });
      }
    });

    return () => {
      abortController.abort();
      isApiSubscribed = false;
    };
  }, []);

  useEffect(() => {
    validateForm();
  }, [title, description, date]);

  const onFileChange = (e) => {
    console.log(e);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    images.map((image) => {
      //
      if (!image) return;
      const sotrageRef = ref(storage, `files/${image.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    });
  };

  const init = {
    validateForm,
    onDescriptionChange,
    onDateChange,
    onTitleChange,
    convertedDate,
    isValid,
    onFileChange,
    handleUpload,
    handleMapClick,
    title,
    description,
    date,
    point
  };

  return (
    <>
      {ReactDOM.createPortal(
        <EditInformation closeModal={closeModal} init={init} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default EditInformationContainer;
