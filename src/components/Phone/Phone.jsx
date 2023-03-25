import React from "react";
import "./Phone.css";
function Phone() {
  return (
    <>
      <nav className="navbar bg-body-tertiary emailAndPhoneSizing">
        <div className="container shake">
          <a href="#">
            <span className="material-symbols-outlined">phone_in_talk</span>
            <span className="phoneLineHeight"> (320)-629-2114</span>
            <i className="bi bi-list"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Phone;
