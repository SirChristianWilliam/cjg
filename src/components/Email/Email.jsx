import React, { useState } from "react";
import "./Email.css";

function Email() {
  const [icon, setIcon] = useState("mail");

  const handleMouseEnter = () => {
    setIcon("drafts");
  };

  const handleMouseLeave = () => {
    setIcon("mail");
  };

  const handleClick = () => {
    setIcon("drafts");
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary emailAndPhoneSizing">
        <div className="container">
          <a
            href="mailto:cat@cbresults.com"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {icon === "mail" && (
              <>
                <span className="material-symbols-outlined">mail</span>
                <span className="phoneLineHeight "> Let's Chat!</span>
              </>
            )}
            {icon === "drafts" && (
              <>
                <span className="material-symbols-outlined">drafts</span>
                <span className="phoneLineHeight itel"> Let's Chat!</span>
              </>
            )}
          </a>
        </div>
      </nav>
    </>
  );
}

export default Email;
