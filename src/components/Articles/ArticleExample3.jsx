import React from "react";
import { Link, useLocation } from "react-router-dom";

function ArticleExample3() {
  const location = useLocation();
  const isArticlesPath = location.pathname === "/articles";

  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "75%", margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="Images/articlePlaceholder2.png"
              className="img-fluid rounded-start"
              alt="Picture for the article called 'Advice from a pirate'"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Advice from a pirate</h5>
              <div className="card-text">
                &nbsp; Ahoy there, mateys! 'Tis a fine day to talk about buying
                a new ship to call yer own - I mean, a new house! Aye, ye heard
                me right...
                {isArticlesPath && (
                  <Link to="./ArticleExample3">Read more...</Link>
                )}
                {!isArticlesPath && (
                  <p className="card-text">
                    &nbsp; - it's time to drop anchor and start searching for a
                    new home, and me and me crew are here to help ye navigate
                    the treacherous waters of the real estate market.
                    <br></br>
                    &nbsp; Now, ye might be wonderin' why ye should even bother
                    with buyin' a home, when ye can just sail the seven seas and
                    live on yer trusty vessel. But hear me out, me hearties -
                    owning a home can be a great investment, and it can provide
                    ye with a sense of stability and security that ye might not
                    get from a life on the high seas.
                    <br></br>
                    &nbsp; But before ye start lookin' for a home, ye need to
                    figure out what ye want and what ye can afford. Think about
                    what kind of ship - I mean, home - would suit yer needs. Do
                    ye need a big one to accommodate a crew of scallywags, or
                    just a small one for ye and yer parrot? Do ye want to be
                    close to the harbor, or do ye prefer a quieter spot on the
                    outskirts of town?
                    <br></br>
                    &nbsp; Once ye have a clear idea of what ye want, it's time
                    to set yer budget. Ye don't want to be spendin' all yer
                    doubloons on a fancy house, only to find out ye can't afford
                    to repair the leaks in yer own ship. Be realistic about what
                    ye can afford, and stick to it. And then, it's time to start
                    searchin' for yer dream home.
                    <br></br>
                    &nbsp; Ye can use the services of a savvy real estate agent,
                    like me and me crew, or ye can do yer own research online.
                    Either way, make sure to visit the homes ye're interested
                    in, and don't be afraid to ask questions.
                    <br></br>
                    And when ye finally find the perfect home, make sure to
                    inspect it carefully, just like ye would inspect a new ship.
                    Look for any signs of damage or wear and tear, and don't be
                    afraid to negotiate the price with the seller.
                    <br></br>
                    &nbsp; Owning a home might not be as exciting as sailing the
                    seven seas, but it can be just as rewarding. So, hoist the
                    Jolly Roger and set sail on yer real estate adventure!
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
export default ArticleExample3;
