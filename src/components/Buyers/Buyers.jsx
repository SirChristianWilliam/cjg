import React, {useEffect} from "react";
import { HashRouter as Router, Route, Routes, Link, useLocation, useNavigate } from "react-router-dom";

import BuyersExample from "./BuyersExample";
import BuyersExample2 from "./BuyersExample2";
import BuyersExample3 from "./BuyersExample3";
import BuyersExample4 from "./BuyersExample4";
import BuyersExample5 from "./BuyersExample5";
function Buyers() {
  const location = useLocation();
  const isArticlesPath = location.pathname === "/buyers";
  // const history = useHistory();
  const isBuyersPath = location.pathname.endsWith("/buyers");
  const navigate = useNavigate();
  // useEffect(() => {
  //   {isBuyersPath ?? (
  //     navigate('/')
  //   )}
  // }, []);
  return (
    
    <>
      <h1>Buyers</h1>
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