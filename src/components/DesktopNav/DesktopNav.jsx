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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Pine%20City,%20MN%20(City)&city_city=Pine%20City&add_state=MN&geoId=PL2751064&pgeSize=200&pgeNum=1&hght=11.806398841144805&wdth=14.501953125&srtBy=DateListed&nearby=0"
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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Mora,%20MN%20(City)&city_city=Mora&add_state=MN&geoId=PL2744044&pgeSize=200&pgeNum=1&lat=45.87017397049115&long=-93.27469225000002&hght=0.30933083234759096&wdth=0.479278564453125&zm=11&srtBy=DateListed&nearby=0"
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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Rush%20City,%20MN%20(City)&city_city=Rush%20City&add_state=MN&geoId=PL2756266&pgeSize=200&pgeNum=1&lat=45.68717539787725&long=-93.001928885&hght=0.1551742960555771&wdth=0.2396392822265625&zm=12&srtBy=DateListed&nearby=0"
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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Grasston,%20MN%20(City)&city_city=Grasston&add_state=MN&geoId=PL2725424&pgeSize=200&pgeNum=1&lat=45.810193865665354&long=-93.10995299&hght=0.07741639408924073&wdth=0.11981964111328125&zm=13&srtBy=DateListed&nearby=0"
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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Braham,%20MN%20(City)&city_city=Braham&add_state=MN&geoId=PL2707282&pgeSize=200&pgeNum=1&lat=45.7341696723895&long=-93.199772895&hght=0.07752199455838849&wdth=0.11981964111328125&zm=13&srtBy=DateListed&nearby=0"
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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Brook%20Park,%20MN%20(City)&city_city=Brook%20Park&add_state=MN&geoId=PL2707984&pgeSize=200&pgeNum=1&lat=45.96940044303718&long=-93.145232&hght=0.15438950758047554&wdth=0.2396392822265625&zm=12&srtBy=DateListed&nearby=0"
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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Rock%20Creek,%20MN%20(City)&city_city=Rock%20Creek&add_state=MN&geoId=PL2754934&pgeSize=200&pgeNum=1&lat=45.7589869993854&long=-92.8994735&hght=0.30994904789909583&wdth=0.479278564453125&zm=11&srtBy=DateListed&nearby=0"
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
                className="dropdown-item city"
                href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Hinckley,%20MN%20(City)&city_city=Hinckley&add_state=MN&geoId=PL2729294&pgeSize=200&pgeNum=1&lat=46.00993951461716&long=-92.84228978000002&hght=0.30855206361933796&wdth=0.479278564453125&zm=11&srtBy=DateListed&nearby=0"
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
              Why it's so important to choose a local agent when selling your property
              </li>
            </Link>

            <Link to="./sellers/sellersexample2" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
              What is my property worth?
              </li>
            </Link>
            <Link to="./sellers/sellersexample3" onClick={handlingClick}>
              <li className="dropdown-item" type="button">
              Pre-Listing Improvements/Upgrades That Are Worth The Investment
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
