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
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Pine%20City,%20MN%20(City)&city_city=Pine%20City&add_state=MN&geoId=PL2751064&pgeSize=200&pgeNum=1&hght=11.806398841144805&wdth=14.501953125&srtBy=DateListed&nearby=0"
                    target="_blank"
                  >
                    Pine City, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Mora,%20MN%20(City)&city_city=Mora&add_state=MN&geoId=PL2744044&pgeSize=200&pgeNum=1&lat=45.87017397049115&long=-93.27469225000002&hght=0.30933083234759096&wdth=0.479278564453125&zm=11&srtBy=DateListed&nearby=0"
                    target="_blank"
                  >
                    Mora, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Rush%20City,%20MN%20(City)&city_city=Rush%20City&add_state=MN&geoId=PL2756266&pgeSize=200&pgeNum=1&lat=45.68717539787725&long=-93.001928885&hght=0.1551742960555771&wdth=0.2396392822265625&zm=12&srtBy=DateListed&nearby=0"
                    target="_blank"
                  >
                    Rush City, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Grasston,%20MN%20(City)&city_city=Grasston&add_state=MN&geoId=PL2725424&pgeSize=200&pgeNum=1&lat=45.810193865665354&long=-93.10995299&hght=0.07741639408924073&wdth=0.11981964111328125&zm=13&srtBy=DateListed&nearby=0"
                    target="_blank"
                  >
                    Grasston, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Braham,%20MN%20(City)&city_city=Braham&add_state=MN&geoId=PL2707282&pgeSize=200&pgeNum=1&lat=45.7341696723895&long=-93.199772895&hght=0.07752199455838849&wdth=0.11981964111328125&zm=13&srtBy=DateListed&nearby=0"
                    target="_blank"
                  >
                    Braham, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Brook%20Park,%20MN%20(City)&city_city=Brook%20Park&add_state=MN&geoId=PL2707984&pgeSize=200&pgeNum=1&lat=45.96940044303718&long=-93.145232&hght=0.15438950758047554&wdth=0.2396392822265625&zm=12&srtBy=DateListed&nearby=0"
                    target="_blank"
                  >
                    Brook Park, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Rock%20Creek,%20MN%20(City)&city_city=Rock%20Creek&add_state=MN&geoId=PL2754934&pgeSize=200&pgeNum=1&lat=45.7589869993854&long=-92.8994735&hght=0.30994904789909583&wdth=0.479278564453125&zm=11&srtBy=DateListed&nearby=0"
                    target="_blank"
                  >
                    Rock Creek, MN
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.edinarealty.com/listing/listingsearch/properties?minPrice=0&maxPrice=0&nBed=0&nBath=0&pt_val=ForSale&age=age_any&sts_sale=1&sts_con=1&sts_soon=1&addl_stat=addl_stat_any&ext_gar=0&sugg_txt=Hinckley,%20MN%20(City)&city_city=Hinckley&add_state=MN&geoId=PL2729294&pgeSize=200&pgeNum=1&lat=46.00993951461716&long=-92.84228978000002&hght=0.30855206361933796&wdth=0.479278564453125&zm=11&srtBy=DateListed&nearby=0"
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
                  <Link to="/buyers/buyersexample" className="dropdown-item">
                  Car insurance? Home insurance? Why not both?
                  </Link>
                  <Link to="/buyers/buyersexample2" className="dropdown-item">
                  Buying a home? Find your inner peace.
                  </Link>
                  <Link to="/buyers/buyersexample3" className="dropdown-item">
                  Don't Get Burned: The Benefits of Fire Insurance in Real Estate     
                  </Link>
                  <Link to="/buyers/buyersexample4" className="dropdown-item">
                    Buyers4
                  </Link>
                  <Link to="/buyers/buyersexample5" className="dropdown-item">
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
                  <Link to="/sellers/sellersexample" className="dropdown-item">
                  Why it's so important to choose a local agent when selling your property
                  </Link>
                  <Link to="/sellers/sellersexample2" className="dropdown-item">
                  What is my property worth?
                  </Link>
                  <Link to="/sellers/sellersexample3" className="dropdown-item">
                  Pre-Listing Improvements/Upgrades That Are Worth The Investment
                  </Link>
                  <Link to="/sellers/sellersexample4" className="dropdown-item">
                    Sellers4
                  </Link>
                  <Link to="/sellers/sellersexample5" className="dropdown-item">
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
