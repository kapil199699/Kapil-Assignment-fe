import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import HoverComponent from "../onHoverComponent/onHoverComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideNavBar from "./sideNavBar";

const NavbarTop = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <main className="header">
      <header>
        <div className="header-top">
          <div className="header-left">
            <div className="nav-icon" onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </div>
          <div className="logo">
            <Link to="/">
              <svg
              id="my-svg"
                width="50"
                height="48"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)" fill="#202020">
                  <path d="M0 45.518v2.398h13.068V29.12L0 33.82v11.698zM0 24.472l13.068-4.699V8.075L0 12.775v11.697zM35.73 11.698V0L22.662 4.699v21.046l-4.797 1.713v11.649l4.797-1.664v10.474H35.73V32.744l13.215-4.65V16.396l-13.215 4.65v-9.348z"></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h50v47.917H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="header-right">
            <div className="trends">Trends</div>
            <div className="language">Hindi</div>
            <div className="login">
              <Link to="/login">Login</Link>
            </div>
            <div className="login">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <li className="navigation">Vides</li>
          <li
            className="navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            News
          </li>
          <li
            className="navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Lifestyles
          </li>
          <li
            className="navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Trending
          </li>
          <li
            className="navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Technology
          </li>
          <li
            className="navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Explainers
          </li>
          <li
            className="navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Entertainment
          </li>
        </div>
        {isHovered && <HoverComponent />}
        {isNavbarOpen && <SideNavBar />}
      </header>
    </main>
  );
};

export default NavbarTop;
