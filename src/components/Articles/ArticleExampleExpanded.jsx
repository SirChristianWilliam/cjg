import React from "react";
import { Link } from "react-router-dom";
import ArticleExample from "./ArticleExample";
function ArticleExampleExpanded() {
  return (
    <>
    <h1>Article ExampleExpanded</h1>
    <ArticleExample/>
      <div class="card mb-3" style={{ maxWidth: "75%", margin: "auto" }} >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="/Images/chairs.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ArticleExampleExpanded;
