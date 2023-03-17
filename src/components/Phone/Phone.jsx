import React from "react";
import "./Phone.css";
function Phone() {
  return (
    <>
      <nav className="navbar bg-body-tertiary emailAndPhoneSizing">
        <div className="container">
          <a href="#">
            <span className="material-symbols-outlined">phone_in_talk</span>
            <span className="phoneLineHeight"> (320)-279-9904</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Phone;
