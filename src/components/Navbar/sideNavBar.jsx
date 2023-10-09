import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./sideNavBar.css";

const SideNavBar = () => {
  let data = [
    {
      id: 1,
      naveItem: "News",
    },
    {
      id: 2,
      naveItem: "Lifestyle",
    },
    {
      id: 3,
      naveItem: "Trending",
    },
    {
      id: 4,
      naveItem: "Technology",
    },
    {
      id: 5,
      naveItem: "Explainer",
    },
    {
      id: 6,
      naveItem: "Entertainment",
    },
    {
      id: 7,
      naveItem: "Videos",
    },
    {
      id: 8,
      naveItem: "Special",
    },
  ];

  return (
    <div className="sideNavBar">
      <div className="icon">
        <div className="homeLogo">
          <Link to="/">
            <svg
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
      </div>
      <div className="bottom-line"></div>
      <div className="searchBar">
        <div className="searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search Articles, Videos, Podcast and more..."
          ></input>
        </div>
      </div>
      {data.map((item) => (
        <>
          <div className="sideNave" key={item.id}>
            <div className="sideNaveIcon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="sideNaveItem">
              <h3>{item.naveItem}</h3>
            </div>
          </div>
          <div className="bottom-line"></div>
        </>
      ))}

      <div className="mediaConnect">
        <h3>Connect With Us</h3>
        <div className="social-media-icon">
          <svg className="sideNavFb" viewBox="0 0 24 24">
            <path d="M0 0v24h12.781v-9.27H9.657v-3.785h3.124V7.766a4.185 4.185 0 0 1 4.186-4.185h3.266v3.403h-2.337a1.33 1.33 0 0 0-1.33 1.33v2.63h3.608l-.498 3.785h-3.11V24H24V0H0z"></path>
          </svg>
          <svg className="sideNavTwitter" viewBox="0 0 24 18">
            <path
              d="M0 15.959c.385.041.777.063 1.175.063 2.306 0 4.43-.727 6.115-1.945-2.155-.037-3.973-1.35-4.6-3.156a5.312 5.312 0 0 0 2.224-.078C2.66 10.426.964 8.589.964 6.387V6.33a5.22 5.22 0 0 0 2.23.569c-1.32-.815-2.19-2.206-2.19-3.783 0-.832.243-1.613.667-2.284C4.099 3.58 7.727 5.39 11.82 5.58a4.228 4.228 0 0 1-.128-1.036c0-2.51 2.205-4.544 4.924-4.544 1.416 0 2.696.552 3.594 1.435A10.373 10.373 0 0 0 23.337.332c-.368 1.061-1.148 1.952-2.165 2.514.996-.11 1.945-.354 2.828-.715a9.618 9.618 0 0 1-2.457 2.352c.01.195.014.39.014.588C21.557 11.076 16.605 18 7.547 18 4.768 18 2.18 17.248 0 15.959z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg className="sideNavInstagram" viewBox="0 0 24 24" fill="none">
            <path
              fill="#fff"
              d="M12 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228-.218.56-.478.96-.898 1.38-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.228-.413a3.718 3.718 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.053-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07zM12 0C8.74 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 0 0-2.126 1.384A5.882 5.882 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12c0 3.26.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.88 5.88 0 0 0 4.14 23.37c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.88 5.88 0 0 0 2.126-1.384 5.883 5.883 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.883 5.883 0 0 0-1.384-2.126A5.882 5.882 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
            ></path>
          </svg>
          <svg className="sideNavYoutube" viewBox="0 0 35 24" fill="none">
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M30.539.717a4.293 4.293 0 0 1 3.031 3.03c.714 2.674.714 8.253.714 8.253s0 5.58-.717 8.252a4.294 4.294 0 0 1-3.03 3.031C27.863 24 17.141 24 17.141 24S6.42 24 3.747 23.283a4.293 4.293 0 0 1-3.031-3.03C0 17.578 0 12 0 12s0-5.58.717-8.252A4.293 4.293 0 0 1 3.747.717C6.422 0 17.143 0 17.143 0S27.864 0 30.54.717zM22.623 12l-8.91-5.142v10.284L22.623 12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
