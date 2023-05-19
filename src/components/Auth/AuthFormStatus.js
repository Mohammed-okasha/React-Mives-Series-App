import { useDispatch } from "react-redux";
import { autActions } from "../../store/slices/auth-slice";
import Spinner from "../UI/Loaders/Spinner";

const AuthFormStatus = (props) => {
  const dispatch = useDispatch();

  function toggleAuthModeHandler() {
    dispatch(autActions.TOGGLE_MODE());
  }

  const textLabel = props.isSignInMode
    ? "don't have an account?"
    : "already have an account";

  const buttonLabel = !props.isSignInMode ? "sign in" : "sign up";

  return (
    <div className="auth_status_mode">
      {textLabel}{" "}
      <button type="button" className="toggle" onClick={toggleAuthModeHandler}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default AuthFormStatus;
