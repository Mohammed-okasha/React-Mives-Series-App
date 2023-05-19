import React from "react";

const Input = React.forwardRef((props, ref) => {
  const inputClasses = props.isValid ? "input" : "input invalid";

  return (
    <div className="form_control">
      <input {...props.input} ref={ref} className={inputClasses} />
      {!props.isValid && <p className="error_msg">{props.errorMessage}</p>}
    </div>
  );
});

export default Input;
