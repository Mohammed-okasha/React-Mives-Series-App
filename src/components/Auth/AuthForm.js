import { useRef, useState } from "react";
import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card";
import Input from "../UI/Input";
import AuthFormStatus from "./AuthFormStatus";
import Button from "../UI/Buttons/Button";
import Spinner from "../UI/Loaders/Spinner";
//===========================================================
function validateEmail(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(String(email).trim().toLowerCase());
}
//===========================================================
const AuthForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState({
    emailIsValid: true,
    passwordIsValid: true,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;

    const emailIsValid =
      emailValue.trim().length > 0 && validateEmail(emailValue);
    const passwordIsValid = passwordValue.trim() !== "";

    setFormIsValid({
      emailIsValid: emailIsValid,
      passwordIsValid: passwordIsValid,
    });

    const formIsValid = emailIsValid && passwordIsValid;

    if (!formIsValid) {
      return;
    }

    if (props.isSignInMode) {
      props.onSignIn(emailValue, passwordValue);
    } else {
      props.onSignup(emailValue, passwordValue);
    }

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const authModeContent = props.isSignInMode ? "sign in" : "sign up";
  return (
    <Modal onCloseModal={props.onCloseAuthModal}>
      <Card>
        <form className="auth_form" onSubmit={submitHandler}>
          <h3 className="form_title">{authModeContent}</h3>
          <Input
            ref={emailInputRef}
            input={{
              type: "email",
              name: "email",
              placeholder: "enter your email",
            }}
            isValid={formIsValid.emailIsValid}
            errorMessage="email is not valid"
          />
          <Input
            ref={passwordInputRef}
            input={{
              type: "password",
              name: "password",
              placeholder: "enter your password",
            }}
            isValid={formIsValid.passwordIsValid}
            errorMessage="password required"
          />
          <AuthFormStatus isSignInMode={props.isSignInMode} />
          <Button type="submit">
            {!props.isLoading ? authModeContent : <Spinner />}
          </Button>
        </form>
      </Card>
    </Modal>
  );
};

export default AuthForm;
