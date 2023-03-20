import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div className="theToggler mobileOnOrOff">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Escape key to close
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Listings
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Close this tab</button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-pine-city-mn"
                    target="_blank"
                  >
                    Pine City, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-mora-mn"
                    target="_blank"
                  >
                    Mora, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-rush-city-mn"
                    target="_blank"
                  >
                    Rush City, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-grasston-mn"
                    target="_blank"
                  >
                    Grasston, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-braham-mn"
                    target="_blank"
                  >
                    Braham, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-brook-park-mn"
                    target="_blank"
                  >
                    Brook Park, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-rock-creek-mn"
                    target="_blank"
                  >
                    Rock Creek, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.cbresults.com/homes-for-sale-in-hinckley-mn"
                    target="_blank"
                  >
                    Hinckley, MN
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Buyers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Close this tab</button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Buyers1
                  </a>
                  <a className="dropdown-item" href="#">
                    Buyers2
                  </a>
                  <a className="dropdown-item" href="#">
                    Buyers3
                  </a>
                  <a className="dropdown-item" href="#">
                    Buyers4
                  </a>
                  <a className="dropdown-item" href="#">
                    Buyers5
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sellers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Close this tab</button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sellers1
                  </a>
                  <a className="dropdown-item" href="#">
                    Sellers2
                  </a>
                  <a className="dropdown-item" href="#">
                    Sellers3
                  </a>
                  <a className="dropdown-item" href="#">
                    Sellers4
                  </a>
                  <a className="dropdown-item" href="#">
                    Sellers5
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/articles" className="nav-link active">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
