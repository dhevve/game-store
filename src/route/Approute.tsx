import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ShoppingBasket from "../pages/shopping basket/ShoppingBasket";

const Approute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<ShoppingBasket />} />
    </Routes>
  );
};

export default Approute;