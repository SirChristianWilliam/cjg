import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import SellersExample from "./SellersExample";
import SellersExample2 from "./SellersExample2";
import SellersExample3 from "./SellersExample3";
import SellersExample4 from "./SellersExample4";
import SellersExample5 from "./SellersExample5";


function Sellers() {
  return (
    <>
      <h1>Sellers</h1>
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