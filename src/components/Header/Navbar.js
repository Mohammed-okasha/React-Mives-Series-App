import React from "react";
import { NavLink } from "react-router-dom";
import CloseButton from "../UI/CloseButton";

const Navbar = ({ isOpen, onCloseNavbar }) => {
  const navBarClasses = !isOpen ? "navbar" : "navbar open";

  return (
    <nav className={navBarClasses}>
      <ul className="nav_menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav_link ${isActive ? "active_tab" : undefined}`
            }
            end
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              `nav_link ${isActive ? "active_tab" : undefined}`
            }
            end
          >
            movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tvSeries"
            className={({ isActive }) =>
              `nav_link ${isActive ? "active_tab" : undefined}`
            }
            end
          >
            tv series
          </NavLink>
        </li>
        <CloseButton className="close_navbar" onClick={onCloseNavbar} />
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
