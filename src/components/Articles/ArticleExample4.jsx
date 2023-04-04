import React from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollToTop from "../ScrollFunction/ScrollFunction";

function ArticleExample4() {
  const location = useLocation();
  const isArticlesPath = location.pathname === "/articles";
  const handleClick = ScrollToTop();

  return (
    <>
      {isArticlesPath && (
        <div className="card mb-3" style={{ maxWidth: "75%", margin: "auto" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="Images/articlePlaceholder.png"
                className="card-img"
                style={{ height: "100%", objectFit: "cover" }}
                alt="'How to find the right real estate agent'"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  How to Find the Right Real Estate Agent
                </h5>
                <div className="card-text">
                  &nbsp; Buying or selling a home can be a daunting task, but
                  the right real estate agent can make all the difference. A
                  good agent will...
                  <Link to="./articleexample4" onClick={handleClick}>
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
              src="Images/articlePlaceholder.png"
              className="img-fluid buyerssellersimages"
              alt="'How to find the right real estate agent'"
            />
            <div className="card-body w-100 buyerssellersarticletextcontainer">
              <h5 className="card-title">
                {" "}
                How to Find the Right Real Estate Agent
              </h5>
              <div className="card-text">
                <p className="card-text">
                  <br></br>
                  Buying or selling a home can be a daunting task, but the right
                  real estate agent can make all the difference. A good agent
                  will only help you navigate the complex world of real estate,
                  but also provide you with valuable advice and support
                  throughout the process. So, how do you find the right agent
                  for you? Here are a few tips:
                  <br></br>
                  &nbsp; 1. Look for Experience Experience is key when it comes
                  to choosing a real estate agent. Look for someone who has been
                  in the business for a while and has a proven track record of
                  success. An experienced agent will have the knowledge and
                  skills to help you navigate any challenges that may arise
                  during the buying or selling process.
                  <br></br>
                  &nbsp; 2. Check for Credentials Make sure your agent is
                  licensed and has any necessary certifications or designations.
                  This will give you peace of mind knowing that your agent has
                  the proper training and expertise to handle your real estate
                  transaction.
                  <br></br>
                  &nbsp; 3. Consider Communication Skills Communication is key
                  in any real estate transaction, so make sure you choose an
                  agent who is a good communicator. Your agent should be able to
                  answer your questions and provide regular updates throughout
                  the buying or selling process.
                  <br></br>
                  &nbsp; 4. Look for Local Expertise Choose an agent who is
                  familiar with the local market and has expertise in your area.
                  They should be able to provide you with valuable insights and
                  advice about the neighborhood, schools, and other amenities.
                  <br></br>
                  &nbsp; 5. Trust Your Gut Finally, trust your gut. Choose an
                  agent who makes you feel comfortable and confident. You should
                  be able to trust your agent and feel like they have your best
                  interests at heart.
                  <br></br>
                  &nbsp; 6. Finding the right real estate agent can be a
                  challenge, but by following these tips, you can increase your
                  chances of finding an agent who will help you achieve your
                  real estate goals.
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
export default ArticleExample4;
