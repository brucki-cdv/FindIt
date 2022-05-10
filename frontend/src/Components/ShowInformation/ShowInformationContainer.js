import ShowInformation from "./ShowInformation";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { storage } from "../../Services/firebase.service";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ShowInformationContainer = (props) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [images, setImages] = useState([]);

  const closeModal = () => {
    dispatch({ type: "MODAL_CLOSE" });
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
    console.log(images.length);
    if (images.length === 0 || date == undefined || description == "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [images, date, description]);

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
    isValid,
    onFileChange,
    handleUpload,
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ShowInformation closeModal={closeModal} init={init} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ShowInformationContainer;
