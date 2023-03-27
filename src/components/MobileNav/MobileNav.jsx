import React, { useState } from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

function MobileNav() {
  // const [hamburger, setHamburger] = useState(false);

  // function onHamClicked() {
  //   setHamburger(!hamburger);

  // }
  function closeMobileDrawer() {
    return console.log("yo");
  }
  return (
    <>
      <div className="theToggler mobileOnOrOff">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          // onClick={onHamClicked}
        >
          {/* {hamburger == true && (
            <span className="navbar-toggler-icon"></span>

          )}
          {hamburger == false && (
          <span className="navbar-toggler-icon">ffff</span>

          )} */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </a>
              <ul className="dropdown-menu">
                {/* <li>
                  <button className="dropdown-item">Close</button>
                </li> */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </a>
              <ul className="dropdown-menu">
                {/* <li>
                  <button className="dropdown-item">Close</button>
                </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li data-bs-dismiss="offcanvas">
                  {/* Might need to add type="button" on the line above 
                    for accessibility purposes (screen readers) */}
                  <Link to="/Buyers/BuyersExample" className="dropdown-item">
                    Buyers1
                  </Link>
                  <Link to="/Buyers/BuyersExample2" className="dropdown-item">
                    Buyers2
                  </Link>
                  <Link to="/Buyers/BuyersExample3" className="dropdown-item">
                    Buyers3
                  </Link>
                  <Link to="/Buyers/BuyersExample4" className="dropdown-item">
                    Buyers4
                  </Link>
                  <Link to="/Buyers/BuyersExample5" className="dropdown-item">
                    Buyers5
                  </Link>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </a>
              <ul className="dropdown-menu">
                {/* <li>
                  <button className="dropdown-item">Close</button>
                </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link to="/Sellers/SellersExample" className="dropdown-item">
                    Sellers1
                  </Link>
                  <Link to="/Sellers/SellersExample2" className="dropdown-item">
                    Sellers2
                  </Link>
                  <Link to="/Sellers/SellersExample3" className="dropdown-item">
                    Sellers3
                  </Link>
                  <Link to="/Sellers/SellersExample4" className="dropdown-item">
                    Sellers4
                  </Link>
                  <Link to="/Sellers/SellersExample5" className="dropdown-item">
                    Sellers5
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link to="/articles" className="nav-link active">
                Articles
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
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
