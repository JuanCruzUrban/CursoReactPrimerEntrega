import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="cartWidDiv">
      <Link to={"/shoppage"}>
        <ShoppingCartIcon />
        <p>0</p>
      </Link>
    </div>
  );
};

export default CartWidget;
