import ReactDOM from "react-dom";
import Backdrop from "../Modal/Backdrop";

const overlays = document.getElementById("overlays");

const Loading = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, overlays)}{" "}
      {ReactDOM.createPortal(
        <div className="loading_spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>,
        overlays
      )}
    </>
  );
};

export default Loading;
