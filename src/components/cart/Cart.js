import React from "react";
import CartContent from "./CartContent";
import { useCartContext } from "./CartContext.js";
import EmptyCart from "./EmptyCart.js";

const Cart = function () {
  const { items } = useCartContext();
  const validItems = items && items.length > 0;

  return <>{validItems ? <CartContent /> : <EmptyCart />}</>;
};

export default Cart;
