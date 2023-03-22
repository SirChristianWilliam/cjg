import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DesktopNav.css";
function DesktopNav() {
  return (
    <>
      <ul className="nav justify-content-end desktopOnOrOff">
        <li className="nav-item dropdown">
          <a
            className="btn btn-secondary dropdown-toggle nav-link"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
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
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-pine-city-mn"
                target="_blank"
              >
                Pine City, MN
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-mora-mn"
                target="_blank"
              >
                Mora, MN
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-rush-city-mn"
                target="_blank"
              >
                Rush City, MN
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-grasston-mn"
                target="_blank"
              >
                Grasston, MN
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-braham-mn"
                target="_blank"
              >
                Braham, MN
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-brook-park-mn"
                target="_blank"
              >
                Brook Park, MN
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-rock-creek-mn"
                target="_blank"
              >
                Rock Creek, MN
              </a>
            </li>
            <li>
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
            className="btn btn-secondary dropdown-toggle nav-link"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
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
            <Link to="./Buyers/BuyersExample">
              <li className="dropdown-item" type="button">
                Article for buyers
              </li>
            </Link>
            <Link to="./Buyers/BuyersExample2">
              <li className="dropdown-item" type="button">
                Article for buyers
              </li>
            </Link>
            <Link to="./Buyers/BuyersExample3">
              <li className="dropdown-item" type="button">
                Article for buyers
              </li>
            </Link>
            <Link to="./Buyers/BuyersExample4">
              <li className="dropdown-item" type="button">
                Article for buyers
              </li>
            </Link>
            <Link to="./Buyers/BuyersExample5">
              <li className="dropdown-item" type="button">
                Article for buyers
              </li>
            </Link>
          </ul>
        </li>

        {/* */}
        <li className="nav-item dropdown">
          <a
            className="btn btn-secondary dropdown-toggle nav-link"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
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
            <li>
              <a className="dropdown-item" type="button">
                Article for Sellers
              </a>
            </li>
            <li>
              <a className="dropdown-item" type="button">
                Article for Sellers
              </a>
            </li>
            <li>
              <a className="dropdown-item" type="button">
                Article for Sellers
              </a>
            </li>
            <li>
              <a className="dropdown-item" type="button">
                Article for Sellers
              </a>
            </li>
            <li>
              <a className="dropdown-item" type="button">
                Article for Sellers
              </a>
            </li>
          </ul>
        </li>
        {/*  */}

        <li className="nav-item">
          <Link to="/articles" className="nav-link">
            Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
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
