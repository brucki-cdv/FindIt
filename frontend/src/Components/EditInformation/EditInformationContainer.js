import EditInformation from "./EditInformation";
import dataService from "../../Services/data.service";

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { storage } from "../../Services/firebase.service";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const EditInformationContainer = (props) => {
  let imagesUrlArr = [];
  const dispatch = useDispatch();
  const { reportId } = useSelector((state) => state.sideContent);
  const { userId } = useSelector((state) => state.auth);
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
  const [viewPort, setViewPort] = useState({
    latitude: null,
    longitude: null,
    width: "100%",
    height: "100%",
    zoom: 4,
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
    console.log(event);
    setPoint({
      isCreated: true,
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
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
          isCreated: true,
        });

        setViewPort((prevState) => {
          return {
            ...prevState,
            latitude: val.data.report.ReportLocation.latitude,
            longitude: val.data.report.ReportLocation.longitude,
          };
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

  const handleEditRecord = () => {
    console.log("POINT = ", point.longitude);
    return new Promise((resolve, reject) => {
      dataService
        .updateReport(reportId, {
          title: "" + title,
          description: "" + description,
          longitude: point.longitude,
          latitude: point.latitude,
          images: imagesUrlArr
        })
        .then(resolve())
        .catch((error) => reject(error));
    });
  };

  const handleReportUpdate = async () => {
    Promise.all(
      images.map((image) => {
        return handleUploadImage(image);
      })
    ).then(() => {
      handleEditRecord();
    });

    dispatch({ type: "MODAL_CLOSE" });
  };

  const init = {
    onDescriptionChange,
    onDateChange,
    onTitleChange,
    onFileChange,
    handleUploadImage,
    handleMapClick,
    handleReportUpdate,
    validateForm,
    title,
    description,
    date,
    point,
    convertedDate,
    isValid,
    setViewPort,
    viewPort
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
