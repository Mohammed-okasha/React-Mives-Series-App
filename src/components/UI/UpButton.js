import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const UpButton = () => {
  const [upBtnIsActive, setUpBtnIsActive] = useState(false);
  const upBtnClasses = `up_btn ${upBtnIsActive ? "active" : ""}`;

  function scrollToTopHandler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY >= 400) {
        setUpBtnIsActive(true);
      } else {
        setUpBtnIsActive(false);
      }
    });
  }, []);

  return (
    <button type="button" className={upBtnClasses} onClick={scrollToTopHandler}>
      <FaChevronUp />
    </button>
  );
};

export default UpButton;
