import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import BuyersExample from "./BuyersExample";
import BuyersExample2 from "./BuyersExample2";
import BuyersExample3 from "./BuyersExample3";
import BuyersExample4 from "./BuyersExample4";
import BuyersExample5 from "./BuyersExample5";
function Buyers() {
  return (
    <>
      <h1>Buyers</h1>
      {/* h1 "Buyers" is the template outline for all the articles */}
      {/*here is the template page*/}
      <Routes>
      <Route path="/BuyersExample" element={<BuyersExample />} />
      <Route path="/BuyersExample2" element={<BuyersExample2 />} />
      <Route path="/BuyersExample3" element={<BuyersExample3 />} />
      <Route path="/BuyersExample4" element={<BuyersExample4 />} />
      <Route path="/BuyersExample5" element={<BuyersExample5 />} />
      </Routes>
    </>
  );
}

export default Buyers;