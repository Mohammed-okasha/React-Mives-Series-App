import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectAuthState, autActions } from "../../store/slices/auth-slice";
import Container from "../UI/Layouts/Container";
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderButtons from "./HeaderButtons";
import Auth from "../Auth/Auth";
import { FaBars } from "react-icons/fa";
//? Firebase
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
//===============================================================
const Header = () => {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const location = useLocation();

  //* Auth Modal
  const openAuthModalHandler = useCallback(() => setAuthModalIsOpen(true), []);
  const closeAuthModalHandler = useCallback(
    () => setAuthModalIsOpen(false),
    []
  );

  //* Mobile Navbar
  const openNavbarHandler = useCallback(() => setNavBarIsOpen(true), []);
  const closeNavbarHandler = useCallback(() => setNavBarIsOpen(false), []);

  useEffect(() => {
    const locations = ["/", "/movies", "/tvSeries"];

    if (locations.includes(location.pathname)) {
      window.scrollTo({ top: 0, behavior: "smooth" });

      setNavBarIsOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userName = user.email.slice(0, 1);

        dispatch(
          autActions.USER_LOGIN({ userName: userName, userEmail: user.email })
        );
      } else {
        dispatch(autActions.USER_LOGOUT());
      }
    });
  }, [dispatch]);

  return (
    <>
      {authModalIsOpen && <Auth onCloseAuthModal={closeAuthModalHandler} />}
      {/* {navBarIsOpen && <BackdropOverlay closeBackdrop={closeNavbarHandler} />} */}
      <header id="header">
        <Container>
          <button
            type="button"
            className="open_btn"
            onClick={openNavbarHandler}
          >
            <FaBars fontSize="1.25rem" />
          </button>
          <Logo />
          <Navbar isOpen={navBarIsOpen} onCloseNavbar={closeNavbarHandler} />
          <HeaderButtons
            onOpenAuthModal={openAuthModalHandler}
            isLoggedIn={authState.isLoggedIn}
            userName={authState.userName}
          />
        </Container>
      </header>
    </>
  );
};

export default Header;
