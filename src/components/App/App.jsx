import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Component imports
import About from "../About/About";
import Articles from "../Articles/Articles";
import Buyers from "../Buyers/Buyers";
import Email from "../Email/Email";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Listings from "../Listings/Listings";
import MobileNav from "../MobileNav/MobileNav";
import Phone from "../Phone/Phone";
import Sellers from "../Sellers/Sellers";
import Nav from "../Nav/Nav";

function App() {
  return (
    <>
      <Router>
        {/* Always show the Nav */}
        <Nav />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Buyers" element={<Buyers />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/Listings" element={<Listings />} />
          <Route path="/MobileNav" element={<MobileNav />} />
          <Route path="/Phone" element={<Phone />} />
          <Route path="/Sellers" element={<Sellers />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
