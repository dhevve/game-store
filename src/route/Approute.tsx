import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";


const Approute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default Approute;
