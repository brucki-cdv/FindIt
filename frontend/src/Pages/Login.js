import style from "./Login.module.css";
import PanelWrapper from "../Components/Panel/PanelWrapper";
import PanelImage from "../Components/Panel/PanelImage";
import PanelBody from "../Components/Panel/PanelBody";
import InputField from "../Components/InputField";
import LogInWith from "../Components/LogInWith";
import Title from "../Components/Title";
import SubmitButton from "../Components/SubmitButton";
import MutedLink from "../Components/MutedLink";
import ErrorFormMessage from "../Components/ErrorFormMessage";
import Form from "../Components/Form";

import { FaGoogle } from "react-icons/fa";

const Login = (props) => {
  return (
    <PanelWrapper>
      <PanelImage>
        <div className={style.panelImageTexts}>
          <span className={style.panelImageTextBold}>
            Find lost thing or missing people with help of people!
          </span>
          <span className={style.panelImageTextThin}>
            FindIt is the best solution the help you with lost thing or missing
            people. Just add this on portal!
          </span>
        </div>
      </PanelImage>
      <PanelBody>
        <Title>Log In</Title>
        <LogInWith logo={<FaGoogle />}>Log In with Google!</LogInWith>
        <Form onSubmit={props.handleSubmit}>
          <InputField
            label="Enter email:"
            placeholder="Email"
            onChange={props.onEmailChange}
          />
          
          <InputField
            type="password"
            label="Enter password:"
            placeholder="Password"
            onChange={props.onPasswordChange}
          />
          {!props.errMsg && (
            <ErrorFormMessage>{props.errMsg}</ErrorFormMessage>
          )}
          <SubmitButton name="Log In" />
        </Form>
        <MutedLink href="https://www.google.com">
          Don't have an account? Create a new one!
        </MutedLink>
      </PanelBody>
    </PanelWrapper>
  );
};

export default Login;
