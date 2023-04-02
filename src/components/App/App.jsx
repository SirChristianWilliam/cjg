import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
// import './Custom.scss';

// Component imports
import About from "../About/About";
import Articles from "../Articles/Articles";
import Buyers from "../Buyers/Buyers";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Listings from "../Listings/Listings";
import MobileNav from "../MobileNav/MobileNav";
import Sellers from "../Sellers/Sellers";
import Nav from "../Nav/Nav";

function App() {
  const [linkClicked, setLinkClicked] = useState(false);

  useEffect(() => {
    if (linkClicked) {
      window.scrollTo(0, 0);
      setLinkClicked(false);
    }
  }, [linkClicked]);
  return (
    <>
      <Router>
        {/* Always show the Nav */}
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/articles/*" element={<Articles />} />
          <Route path="/buyers/*" element={<Buyers />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/mobileNav" element={<MobileNav />} />
          <Route path="/sellers/*" element={<Sellers />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
