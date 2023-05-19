import { useRouteError } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Error from "../components/UI/Error/Error";

function ErrorPage() {
  const error = useRouteError();

  let errorTitle = "an error occurred";
  let errorMessage = "something went wrong";

  if (error.status === 500) {
    errorMessage = error.data.message;
  }

  if (error.status === 404) {
    errorTitle = error.status;
    errorMessage = "page not found";
  }

  return (
    <>
      <Header />
      <Error title={errorTitle} message={errorMessage} />
      <Footer />
    </>
  );
}

export default ErrorPage;
