import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../store/slices/auth-slice";
import AuthForm from "./AuthForm";
import Account from "./Account";
// ? Firebase
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { toast } from "react-toastify";
//===========================================================
const Auth = (props) => {
  const authState = useSelector(selectAuthState);
  const [isLoading, setIsLoading] = useState(false);

  const signInHandler = (email, pass) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCred) => {
        setIsLoading(false);

        // Close Auth Modal
        props.onCloseAuthModal();

        toast.success("signed in has been successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      })

      .catch((error) => {
        setIsLoading(false);
        toast.error(error.code, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  const signupHandler = (email, pass) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCred) => {
        // Close Auth Modal
        props.onCloseAuthModal();

        setIsLoading(false);

        toast.success("signed up has been successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      })

      .catch((error) => {
        const errorCode = error.code;

        setIsLoading(false);

        toast.error(errorCode, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  const signOutHandler = async () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        setIsLoading(false);

        // Close Auth Modal
        props.onCloseAuthModal();

        toast.success("signed out has been successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        setIsLoading(false);

        toast.error(error.code, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  const authContent = !authState.isLoggedIn ? (
    <AuthForm
      onCloseAuthModal={props.onCloseAuthModal}
      onSignup={signupHandler}
      onSignIn={signInHandler}
      isSignInMode={authState.isSignInMode}
      isLoading={isLoading}
    />
  ) : (
    <Account
      onSignOut={signOutHandler}
      isLoading={isLoading}
      userEmail={authState.userEmail}
    />
  );

  return authContent;
};

export default Auth;
