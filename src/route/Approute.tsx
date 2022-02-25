import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ShoppingBasket from "../pages/shopping basket/ShoppingBasket";
import Registration from "../pages/registration/Registration";
import Profile from "../pages/profile/Profile";
import { useTypedSelector } from '../hooks/useTypedSelector'

const Approute: FC = () => {
  const {auth} = useTypedSelector(state => state.auth)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<ShoppingBasket />} />
      {auth ? <Route path="/profile" element={<Profile />} /> : <Route path="/registration" element={<Registration />} />}
    </Routes>
  );
};

export default Approute;