import Login from "./Login";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContainer = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    email: null,
    password: null,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    formValidation();
    navigateUser();
    setEmail("");
    setPassword("");
  };

  const formValidation = () => {

   

    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setIsEmailValid(false);
      setErrorMessage((prevState) => {
        return { ...prevState, email: "Wrong email model" };
      });
    } else {
      setIsEmailValid(true);
      setErrorMessage((prevState) => {
        return { ...prevState, email: null };
      });
    }

    if (email === "" || email === null) {
      setIsEmailValid(false);
      setErrorMessage((prevState) => {
        return { ...prevState, email: "Email cannot be empty" };
      });
    }

    if (password.length < 5) {
      setIsPasswordValid(false);
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          password: "Password has to be min 5 characters long",
        };
      });
    } else {
      setIsPasswordValid(true);
      setErrorMessage((prevState) => {
        return { ...prevState, email: null };
      });
    }

    if (password === "" || password === null) {
      setIsPasswordValid(false);
      setErrorMessage((prevState) => {
        return { ...prevState, password: "Password cannot be empty" };
      });
    }

    
  };

  const navigateUser = () => {
    console.log(isEmailValid);
    console.log(isPasswordValid);
    if (isEmailValid && isPasswordValid) {
      navigate("/home");
    }
  };

  const onEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const loginContext = {
    email,
    password,
    onSubmit,
    onEmailChange,
    onPasswordChange,
    isEmailValid,
    isPasswordValid,
    errorMessage,
  };

  return <Login {...loginContext} />;
};

export default LoginContainer;
