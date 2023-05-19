import ReactDOM from "react-dom";

// overlays Portal
const overlays = document.getElementById("overlays");
//===============================================================
const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className="backdrop" />;
};

export default Backdrop;

export const BackdropOverlay = ({ closeBackdrop }) => {
  return ReactDOM.createPortal(<Backdrop onClose={closeBackdrop} />, overlays);
};
