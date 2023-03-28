import React from "react";
import { Link, useLocation } from "react-router-dom";

function ArticleExample2() {
    const location = useLocation();
    const isArticlesPath = location.pathname === "/articles";
  return (
    <>
      <div class="card mb-3" style={{ maxWidth: "75%", margin: "auto" }} >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="Images/articlePlaceholder.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Article 2</h5>
              <p class="card-text">
              This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. 
                
                {isArticlesPath && (
                 <Link to="./ArticleExample2">Read more...</Link>
                )}
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
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
