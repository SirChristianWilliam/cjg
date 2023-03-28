import React from "react";
import ArticleExample from "./ArticleExample";
import ArticleExample2 from "./ArticleExample2";
import ArticleExample3 from "./ArticleExample3";
import ArticleExample4 from "./ArticleExample4";

import ArticleExampleExpanded from "./ArticleExampleExpanded";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Articles() {
  const location = useLocation();
  const isArticlesPath = location.pathname === "/articles";

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
      {isArticlesPath && (
        <>
          <ArticleExample />
          <ArticleExample2 />
          <ArticleExample3 />
          <ArticleExample4 />
        </>
      )}
      <Routes>
        <Route path="/ArticleExample" element={<ArticleExample />} />
        <Route path="/ArticleExample2" element={<ArticleExample2 />} />
        <Route path="/ArticleExample3" element={<ArticleExample3 />} />
        <Route path="/ArticleExample4" element={<ArticleExample4 />} />
      </Routes>
    </>
  );
}

export default Articles;
