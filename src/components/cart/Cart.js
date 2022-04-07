import React from "react";
import CartContent from "./CartContent";
import CartForm from "./CartForm";
import { useCartContext } from "./CartContext.js";
import EmptyCart from "./EmptyCart.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cartCompContainer: {
    justifyContent: "center",
    display: "flex",
  },
}));

const Cart = function () {
  const { items } = useCartContext();
  const classes = useStyles();
  const validItems = items && items.length > 0;

  return (
    <>
      {validItems ? (
        <div className={classes.cartCompContainer}>
          <CartForm />
          <CartContent />
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
