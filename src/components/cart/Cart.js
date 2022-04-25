import React from "react";
import CartContent from "./CartContent";
import CartForm from "./CartForm";
import { useCartContext } from "./CartContext.js";
import EmptyCart from "./EmptyCart.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cartCompContainer: {
    marginTop: "10px",
    justifyContent: "space-evenly",
    display: "flex",
  },
}));

const Cart = function () {
  const { items } = useCartContext();
  const classes = useStyles();
  const validItems = items && items.length > 0;

  const aPrices = items.map((product) => product.price * product.quantity);
  let total = 0;
  if (aPrices.length > 0)
    total = aPrices.flat().reduce((acc, sum) => acc + sum);

  return (
    <>
      {validItems ? (
        <div className={classes.cartCompContainer}>
          <CartForm total={total} />
          <CartContent total={total} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
