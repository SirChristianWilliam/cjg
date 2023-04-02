import React from "react";
// For some odd reason, both ScrollFunction component and the ScrollUp component are both necessary as ScrollToTop
// works only for the stand-alone articles when "read me..." is clicked on them, while ScrollUp only works for
// the desktop navigation links and their dropdown links (buyersExamples1, 2, 3, etc & sellersExamples1, 2, 3, etc);

function ScrollToTop() {
  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export default ScrollToTop;
