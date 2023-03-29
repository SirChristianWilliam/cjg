import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import BuyersExample from "./BuyersExample";
import BuyersExample2 from "./BuyersExample2";
import BuyersExample3 from "./BuyersExample3";
import BuyersExample4 from "./BuyersExample4";
import BuyersExample5 from "./BuyersExample5";

function Buyers() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts[1] === "buyers") {
      // Check if the path after "/buyers/" is a valid path
      const validPaths = [
        "buyersexample",
        "buyersexample2",
        "buyersexample3",
        "buyersexample4",
        "buyersexample5",
      ];
      if (!validPaths.includes(pathParts[2])) {
        navigate("/");
      }
    }
  }, [location, navigate]);
  return (
    <>
      {/* h1 "Buyers" is the template outline for all the articles */}
      {/*here is the template page*/}

      <Routes>
        <Route path="/buyersexample" element={<BuyersExample />} />
        <Route path="/buyersexample2" element={<BuyersExample2 />} />
        <Route path="/buyersexample3" element={<BuyersExample3 />} />
        <Route path="/buyersexample4" element={<BuyersExample4 />} />
        <Route path="/buyersexample5" element={<BuyersExample5 />} />
      </Routes>
    </>
  );
}

export default Buyers;
