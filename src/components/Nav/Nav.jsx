import React from "react";
import Phone from "../Phone/Phone";
import Email from "../Email/Email";
import ProPic from "../ProPic/ProPic";
import ColdwellLogo from "../ColdwellLogo/ColdwellLogo";
import "./Nav.css";
// 1. Nav bar has different render depending on viewport size. This should reflect in the classes
function Nav() {
  return (
    <>
      {/* Top banner */}
      <nav className="bg-body-tertiary ">
        <div className="container-fluid nav justify-content-start">
          <Phone />
          <Email />
        </div>
      </nav>

      {/* Regular Header Top */}
      <nav className="navbar primaryBackgroundColor">
        <div className="container-fluid">
          <div className="justify-content-start coldAndPro">
            <ColdwellLogo />
            <ProPic />
          </div>

          <div className="theToggler">
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
            // className="offcanvas offcanvas-bottom" this is if I want to change the direction it enters in on
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
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Listings
                  </a>
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
                      <a className="dropdown-item" href="#">
                        Close this tab
                      </a>
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
                      <a className="dropdown-item" href="#">
                        Close this tab
                      </a>
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
