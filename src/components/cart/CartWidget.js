import React from "react";
import { IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  CartButton: {
    fontSize: "1rem",
    padding: 0,
  },
  ItemButton: {
    color: "#FFF",
    backgroundColor: "#555",
    "&:hover": {
      backgroundColor: "#777",
    },
  },
}));

function CartWidget() {
  const classes = useStyles();
  return (
    <IconButton size="medium" className={classes.ItemButton} href="/cart">
      <ShoppingCartIcon className={classes.CartButton} />
    </IconButton>
  );
}

export default CartWidget;
