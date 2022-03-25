import React from "react";
import { IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles, styled } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { useCartContext } from "../../components/cart/CartContext.js";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: 17,
    border: `2px solid`,
    padding: "0 4px",
    backgroundColor: "#9c27b0",
  },
}));

function CartWidget() {
  const classes = useStyles();
  const { items } = useCartContext();

  return (
    <IconButton size="medium" className={classes.ItemButton} href="/cart">
      <StyledBadge badgeContent={items.length} color="secondary">
        <ShoppingCartIcon className={classes.CartButton} />
      </StyledBadge>
    </IconButton>
  );
}

export default CartWidget;
