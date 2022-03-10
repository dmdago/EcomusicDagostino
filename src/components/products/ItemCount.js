import React, { useState, useEffect } from "react";
import { Button, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  ItemContainer: {},
  ItemCounter: {
    display: "flex",
    alignItems: "center",
    width: "auto",
    justifyContent: "center",
  },
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

const ItemCount = function ({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const [disable, setDisable] = useState(false);

  const checkStock = function () {
    if (stock === 0) setDisable(true);
  };

  useEffect(() => {
    checkStock();
  });

  const removeItem = function () {
    if (counter > 0) setCounter(counter - 1);
  };

  const addItem = function () {
    if (counter < stock) setCounter(counter + 1);
  };

  const classes = useStyles();

  return (
    <div className={classes.ItemContainer}>
      <div className={classes.ItemCounter}>
        <div className="col-counter">
          <Button
            variant="text"
            disabled={disable}
            className={classes.ItemButton}
            onClick={removeItem}
          >
            -
          </Button>
        </div>
        <div className="col-counter">
          <Typography>{counter}</Typography>
        </div>
        <div className="col-counter">
          <Button
            variant="text"
            disabled={disable}
            className={classes.ItemButton}
            onClick={addItem}
          >
            +
          </Button>
        </div>
        <IconButton
          size="medium"
          disabled={disable}
          className={classes.ItemButton}
          onClick={() => onAdd(counter)}
        >
          <ShoppingCartIcon className={classes.CartButton} />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemCount;
