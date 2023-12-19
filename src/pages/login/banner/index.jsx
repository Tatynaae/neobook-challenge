import React from "react";
import banner from "../../../assets/images/image 1.png";
import Basket from "../../../assets/icons/basket";

import "./index.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="#" />
      <div className="rec"></div>
      <div className="basket">
        <Basket />
      </div>
    </div>
  );
};

export default Banner;
