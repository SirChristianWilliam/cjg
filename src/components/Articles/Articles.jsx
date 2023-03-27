import React from "react";
import ArticleExample from "./ArticleExample";
import ArticleExampleExpanded from "./ArticleExampleExpanded";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";

function Articles() {
  return (
    <>
      <h1>Articles</h1>
      <p>
        This page will contain all articles that are separate from Buyers and
        Sellers. Unless directed otherwise. I'm not sure how many articles there
        will be yet, but I'll add in an example article component to start so it
        can be easily replicated in the future with minor adjustments where
        needed.
      </p>
      {/* Import articles here */}
      <ArticleExample/>
     {/* <Routes>
     <Route path="/articles/ArticleExampleExpanded" element={<ArticleExampleExpanded />} />

     </Routes> */}
    </>
  );
}

export default Articles;
