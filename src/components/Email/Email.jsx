import React from "react";
import "./Email.css";
function Email() {
  return (
    <>
      <nav className="navbar bg-body-tertiary emailAndPhoneSizing">
        <div className="container">
          <a href="http://www.runescape.com">
            <span className="material-symbols-outlined ">mail</span>
            <span className="phoneLineHeight"> Let's Chat!</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Email;
