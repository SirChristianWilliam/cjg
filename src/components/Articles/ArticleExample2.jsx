import React from "react";
import { Link, useLocation } from "react-router-dom";

function ArticleExample2() {
  const location = useLocation();
  const isArticlesPath = location.pathname === "/articles";
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "75%", margin: "auto" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            {isArticlesPath && (
              <img
                src="Images/articlePlaceholder.png"
                className="card-img"
                style={{ height: "100%", objectFit: "cover" }}
                alt="'How to Prepare Your Home for a Successful Sale'"
              />
            )}
            {!isArticlesPath && (
              <img
                src="Images/articlePlaceholder2.png"
                className="card-img"
                style={{ display: "flex", width: "100%" }}
                alt="'How to Prepare Your Home for a Successful Sale'"
              />
            )}
            <hr></hr>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                How to Prepare Your Home for a Successful Sale
              </h5>
              <div className="card-text">
                &nbsp; If you're planning on selling your home, it's important
                to take the time to prepare it for a successful sale. By making
                a few simple changes and improvements, you can increase your
                home's value and...
                {isArticlesPath && (
                  <Link to="./ArticleExample2">Read more...</Link>
                )}
                {!isArticlesPath && (
                  <p className="card-text">
                    attract more potential buyers. Here are a few tips to help
                    you get started:
                    <br></br>
                    &nbsp; 1. Declutter and Depersonalize Before you list your
                    home for sale, it's important to declutter and depersonalize
                    it. Remove any unnecessary items, such as old furniture,
                    knick-knacks, and personal photos. This will make your home
                    look larger, cleaner, and more inviting to potential buyers.
                    <br></br>
                    &nbsp; 2. Make Minor Repairs Take the time to make minor
                    repairs around your home, such as fixing leaky faucets,
                    repairing squeaky doors, and replacing burnt-out light
                    bulbs. These small improvements can make a big difference in
                    how your home looks and feels to potential buyers.
                    <br></br>
                    &nbsp; 3. Clean and Organize A clean and organized home is
                    more appealing to potential buyers. Take the time to deep
                    clean your home, paying close attention to high-traffic
                    areas like the kitchen and bathrooms. Organize closets,
                    cabinets, and drawers to show off your home's storage
                    potential.
                    <br></br>
                    &nbsp; 4. Stage Your Home Staging your home can help
                    potential buyers envision themselves living there. Rearrange
                    furniture to create a more open and inviting layout, and add
                    a few decorative touches like fresh flowers or colorful
                    throw pillows.
                    <br></br>
                    &nbsp; 5. Boost Curb Appeal First impressions are
                    everything, so make sure your home's exterior looks its
                    best. Add a fresh coat of paint to your front door, tidy up
                    your landscaping, and make sure your lawn is well-manicured.
                    <br></br>
                    &nbsp; Preparing your home for a successful sale doesn't
                    have to be difficult or time-consuming. By following these
                    simple tips, you can increase your home's value and attract
                    more potential buyers.
                  </p>
                )}
              </div>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated March 27th, 2023
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ArticleExample2;
