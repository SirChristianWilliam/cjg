import React from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollToTop from "../ScrollFunction/ScrollFunction";

function ArticleExample() {
  const handleClick = ScrollToTop();
  const location = useLocation();
  const isArticlesPath = location.pathname === "/articles";

  return (
    <>
      {isArticlesPath && (
        <div className="card mb-3" style={{ maxWidth: "75%", margin: "auto" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="Images/articlePlaceholder2.png"
                className="card-img"
                style={{ height: "100%", objectFit: "cover" }}
                alt="'The Top 5 Up-and-Coming Neighborhoods for Real Estate Investment'"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  The Top 5 Up-and-Coming Neighborhoods for Real Estate
                  Investment{" "}
                </h5>
                <div className="card-text">
                  &nbsp; As the real estate market continues to flourish,
                  investors are constantly on the lookout for the next big
                  neighborhood. With the help of industry experts and data
                  analysis, we have compiled a list of the top 5 up-and-coming
                  neighborhoods for real estate investment....
                  <Link to="./articleexample" onClick={handleClick}>
                    Read more...
                  </Link>
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
      )}

      {!isArticlesPath && (
        <>
          <div className="card mb-3 d-flex flex-column align-items-center buyerssellersarticles ">
            <img
              src="Images/articlePlaceholder2.png"
              className="img-fluid buyerssellersimages"
              alt="'The Top 5 Up-and-Coming Neighborhoods for Real Estate Investment'"
            />
            <div className="card-body w-100 buyerssellersarticletextcontainer">
              <h5 className="card-title">
                The Top 5 Up-and-Coming Neighborhoods for Real Estate Investment{" "}
              </h5>
              <div className="card-text">
                <p className="card-text">
                  <br></br>
                  &nbsp; As the real estate market continues to flourish,
                  investors are constantly on the lookout for the next big
                  neighborhood. With the help of industry experts and data
                  analysis, we have compiled a list of the top 5 up-and-coming
                  neighborhoods for real estate investment....
                  <br></br>
                  &nbsp; 1. East Austin, Texas Once a working-class
                  neighborhood, East Austin has undergone significant
                  gentrification in recent years, making it an attractive
                  location for young professionals and families. The area boasts
                  a vibrant arts scene, trendy restaurants, and a strong sense
                  of community. Real estate prices are still relatively
                  affordable compared to other parts of Austin, but they're
                  quickly rising, making now the perfect time to invest.
                  <br></br>
                  &nbsp; 2. West Adams, Los Angeles West Adams has long been a
                  hidden gem in Los Angeles, but it's quickly gaining popularity
                  among investors and homebuyers. The neighborhood's stunning
                  historic homes and tree-lined streets are a major draw, and
                  it's becoming known for its burgeoning food and art scenes.
                  With new development projects in the works, real estate values
                  are expected to skyrocket in the coming years.
                  <br></br>
                  &nbsp; 3. West Loop, Chicago Once an industrial area, the West
                  Loop has transformed into a chic neighborhood filled with
                  luxury condos, trendy restaurants, and high-end boutiques. Its
                  proximity to downtown Chicago makes it an attractive location
                  for young professionals, and with new development projects in
                  the works, there's plenty of potential for growth.
                  <br></br>
                  &nbsp; 4. Brewerytown, Philadelphia Brewerytown, once home to
                  several large breweries, is experiencing a revival. The
                  neighborhood has seen significant investment in recent years,
                  including new housing developments and a thriving arts scene.
                  Its proximity to Center City Philadelphia and the Schuylkill
                  River Trail make it an attractive location for both residents
                  and visitors.
                  <br></br>
                  &nbsp; 5. Capitol Hill, Seattle Capitol Hill has long been one
                  of Seattle's most desirable neighborhoods, but it's recently
                  seen a surge in popularity. Its walkable streets, eclectic mix
                  of shops and restaurants, and proximity to downtown Seattle
                  make it an attractive location for young professionals. With
                  new development projects in the works, real estate values are
                  expected to continue to rise.
                  <br></br>
                  &nbsp; Investing in real estate can be a lucrative
                  opportunity, but it's important to do your research and choose
                  the right location. These up-and-coming neighborhoods offer
                  plenty of potential for growth and a strong return on
                  investment, making them smart choices for investors looking to
                  make a sound investment in the future of real estate.
                </p>
              </div>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated March 27th, 2023
                </small>
              </p>
            </div>
          </div>
          <button
            className="backToArticles"
            onClick={() => {
              window.history.back();
            }}
          >
            ⬅️ Back to all Articles
          </button>
        </>
      )}
    </>
  );
}
export default ArticleExample;
