import React, { useState, useEffect } from "react";
import Phone from "../Phone/Phone";
import Email from "../Email/Email";
import ProPic from "../ProPic/ProPic";
import ColdwellLogo from "../ColdwellLogo/ColdwellLogo";
import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";
import Facebook from "../Facebook/Facebook";

import { Link } from "react-router-dom";

import "./Nav.css";
// 1. Nav bar has different render depending on viewport size. This should reflect in the classes
function Nav() {
  return (
    <>
      {/* Top banner */}
      <nav className="bg-body-tertiary bannerHardlyKnower ">
        <div className="container-fluid nav justify-content-start">
          <Phone />
          <Email />
        </div>
        <Facebook />
      </nav>

      {/* Regular Header Top + Mobile Nav */}
      <nav className="navbar primaryBackgroundColor">
        <div className="container-fluid">
          <div className="justify-content-start coldAndPro">
            <ColdwellLogo />
            <ProPic />
          </div>
          {/* This is the mobile Nav view, viewport <= 500px */}
          <MobileNav />
          {/* This is desktop Nav view, viewport > 500px */}
          <DesktopNav />
        </div>
      </nav>
    </>
  );
}

export default Nav;
