const Error = (props) => {
  return (
    <div className="error_wrapper">
      <h1>{props.title}</h1>
      <h3>{props.message}!</h3>
    </div>
  );
};

export default Error;
