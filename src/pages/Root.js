import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchFavoritesMedia } from "../store/slices/favoriteMovies-slice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UpButton from "../components/UI/UpButton";
//=======================================================================
function RootLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesMedia());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
      <UpButton />
    </>
  );
}

export default RootLayout;
