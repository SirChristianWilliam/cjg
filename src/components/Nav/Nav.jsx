import React from "react";

// 1. Nav bar has different render depending on viewport size. This should reflect in the classes
function Nav() {
  return (
    <>
      <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link with href
      </a>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title" id="offcanvasExampleLabel">
            {/* This keeps the "x" to the right */}
          </h6>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <a
              href="https://www.runescape.com"
              target="_blank"
              rel="noreferrer"
            >
              Listings
            </a>
            <br></br>
            <a
              href="https://www.runescape.com"
              target="_blank"
              rel="noreferrer"
            >
              Buyers
            </a>
            <br></br>

            <a
              href="https://www.runescape.com"
              target="_blank"
              rel="noreferrer"
            >
              Sellers
            </a>
            <br></br>

            <a
              href="https://www.runescape.com"
              target="_blank"
              rel="noreferrer"
            >
              Articles
            </a>
            <br></br>

            <a
              href="https://www.runescape.com"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
            <br></br>

            <a
              href="https://www.runescape.com"
              target="_blank"
              rel="noreferrer"
            >
              Home
            </a>
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="https://www.runescape.com">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="https://www.runescape.com">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="https://www.runescape.com">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
