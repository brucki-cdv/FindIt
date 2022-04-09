import style from "./Register.module.css";
import PanelWrapper from "../Components/Panel/PanelWrapper";
import PanelImage from "../Components/Panel/PanelImage";
import PanelBody from "../Components/Panel/PanelBody";
import InputField from "../Components/InputField";
import LogInWith from "../Components/LogInWith";
import Title from "../Components/Title";
import SubmitButton from "../Components/SubmitButton";
import MutedLink from "../Components/MutedLink";

import { FaGoogle } from "react-icons/fa";

const Register = (props) => {
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
        <Title>Sign In</Title>
        <LogInWith logo={<FaGoogle />}>Sign In with Google!</LogInWith>
        <InputField label="Enter first name:" placeholder="First name" />
        <InputField label="Enter last name:" placeholder="Last name" />
        <InputField label="Enter email:" placeholder="Email" />
        <InputField label="Enter phone number:" placeholder="Phone number" />
        <InputField
          type="password"
          label="Enter password:"
          placeholder="Password"
        />
        <InputField
          type="password"
          label="Repeat password:"
          placeholder="Password"
        />
        <SubmitButton name="Finish" />
        <MutedLink href="https://www.google.com">
          Don't have an account? Create a new one!
        </MutedLink>
      </PanelBody>
    </PanelWrapper>
  );
};

export default Register;
