import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <h1>screen.x</h1>
      </Link>
    </div>
  );
};

export default React.memo(Logo);
