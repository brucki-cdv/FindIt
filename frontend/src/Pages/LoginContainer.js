import Login from "./Login";
import axios from "../Services/axios";

import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  console.log(token);
  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const onEmailChange = (e) => {
    setUser(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/user/login",
        { email: user, password: pwd },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const token = response?.data?.token;
      const userId = response?.data?.userId;
      dispatch({
        type: "AUTHENTICATE_USER",
        payload: { email: user, token: token, userId: userId },
      });
      setUser("");
      setPwd("");
      navigate("/home", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      //errRef.current.focus();
    }
  };
  const loginContext = {
    onEmailChange,
    onPasswordChange,
    handleSubmit,
    errMsg,
  };

  return <Login {...loginContext} />;
};

export default LoginContainer;
