import React from "react";
import { Link } from 'react-router-dom';
import "./DesktopNav.css";
function DesktopNav() {
  return (
    <>
      <ul className="nav justify-content-end desktopOnOrOff">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Listings
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Buyers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sellers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Articles
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
      </ul>
    </>
  );
}

export default DesktopNav;
