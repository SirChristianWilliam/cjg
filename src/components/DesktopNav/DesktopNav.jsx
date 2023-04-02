import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollUp from "../ScrollUp/ScrollUp";

import "./DesktopNav.css";

function DesktopNav() {
  const handlingClick = ScrollUp();

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
          <ul className="dropdown-menu" title="Opens in a new tab">
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-pine-city-mn"
                target="_blank"
              >
                Pine City, MN{" "}
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-mora-mn"
                target="_blank"
              >
                Mora, MN
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-rush-city-mn"
                target="_blank"
              >
                Rush City, MN
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-grasston-mn"
                target="_blank"
              >
                Grasston, MN
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-braham-mn"
                target="_blank"
              >
                Braham, MN
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-brook-park-mn"
                target="_blank"
              >
                Brook Park, MN
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-rock-creek-mn"
                target="_blank"
              >
                Rock Creek, MN
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.cbresults.com/homes-for-sale-in-hinckley-mn"
                target="_blank"
              >
                Hinckley, MN
                <span className="material-symbols-outlined lessen">
                  open_in_new
                </span>
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
            <Link to="./buyers/buyersexample" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Car insurance? Home insurance? Why not both?
              </li>
            </Link>
            <Link to="./buyers/buyersexample2" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Buying a home? Find your inner peace.
              </li>
            </Link>
            <Link to="./buyers/buyersexample3" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Don't Get Burned: The Benefits of Fire Insurance in Real Estate
              </li>
            </Link>
            <Link to="./buyers/buyersexample4" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Article for buyers
              </li>
            </Link>
            <Link to="./buyers/buyersexample5" onClick={handlingClick}>
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
            <Link to="./sellers/sellersexample" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                What time is the right time to sell?
              </li>
            </Link>

            <Link to="./sellers/sellersexample2" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Look out for these common scams when selling your home.
              </li>
            </Link>
            <Link to="./sellers/sellersexample3" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Article for Sellers 3
              </li>
            </Link>
            <Link to="./sellers/sellersexample4" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Article for Sellers 4
              </li>
            </Link>
            <Link to="./sellers/sellersexample5" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
                Article for Sellers 5
              </li>
            </Link>
          </ul>
        </li>
        {/*  */}

        <li className="nav-item">
          <Link to="/articles" className="nav-link" onClick={handlingClick}>
            Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={handlingClick}>
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
