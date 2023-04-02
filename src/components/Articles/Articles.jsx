import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import ArticleExample from "./ArticleExample";
import ArticleExample2 from "./ArticleExample2";
import ArticleExample3 from "./ArticleExample3";
import ArticleExample4 from "./ArticleExample4";

// import { Link, useLocation } from "react-router-dom";

function Articles() {
  const location = useLocation();
  const isArticlesPath = location.pathname === "/articles";

  return (
    <>
      <h1 className="articlesH1">Articles</h1>
   
      {isArticlesPath && (
        <>
          <ArticleExample />
          <ArticleExample2 />
          <ArticleExample3 />
          <ArticleExample4 />
        </>
      )}
      <Routes>
        <Route path="/articleexample" element={<ArticleExample />} />
        <Route path="/articleexample2" element={<ArticleExample2 />} />
        <Route path="/articleexample3" element={<ArticleExample3 />} />
        <Route path="/articleexample4" element={<ArticleExample4 />} />
      </Routes>
    </>
  );
}

export default Articles;
