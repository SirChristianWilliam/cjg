import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import SellersExample from "./SellersExample";
import SellersExample2 from "./SellersExample2";
import SellersExample3 from "./SellersExample3";
import SellersExample4 from "./SellersExample4";
import SellersExample5 from "./SellersExample5";

function Sellers() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts[1] === "sellers") {
      // Check if the path after "/sellers/" is a valid path
      const validPaths = [
        "sellersexample",
        "sellersexample1",
        "sellersexample2",
        "sellersexample3",
        "sellersexample4",
        "sellersexample5",
      ];
      if (!validPaths.includes(pathParts[2])) {
        navigate("/");
      }
    }
  }, [location, navigate]);
  return (
    <>
      <Routes>
        <Route path="/SellersExample" element={<SellersExample />} />
        <Route path="/SellersExample2" element={<SellersExample2 />} />
        <Route path="/SellersExample3" element={<SellersExample3 />} />
        <Route path="/SellersExample4" element={<SellersExample4 />} />
        <Route path="/SellersExample5" element={<SellersExample5 />} />
      </Routes>
    </>
  );
}

export default Sellers;
