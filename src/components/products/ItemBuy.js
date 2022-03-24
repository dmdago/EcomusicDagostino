import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  ItemButton: {
    margin: theme.spacing(1),
    color: "#FFF",
    backgroundColor: "#555",
    "&:hover": {
      backgroundColor: "#777",
    },
  },
  CartButton: {
    fontSize: "1rem",
    padding: 0,
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

const ItemBuy = function ({ disabled, quantity, onAdd }) {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        size="medium"
        disabled={disabled}
        className={classes.ItemButton}
        onClick={() => onAdd(quantity)}
      >
        <StyledBadge badgeContent={quantity} color="secondary">
          <ShoppingCartIcon className={classes.CartButton} />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

export default ItemBuy;
