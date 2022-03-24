import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

const ItemCount = function ({ disabled, stock, initial, getQuantity }) {
  const classes = useStyles();
  const [counter, setCounter] = useState(initial);

  const removeItem = function () {
    if (counter > 0) {
      setCounter(counter - 1);
      getQuantity(counter - 1);
    }
  };

  const addItem = function () {
    if (counter < stock) {
      setCounter(counter + 1);
      getQuantity(counter + 1);
    }
  };

  return (
    <div className={classes.ItemCounter}>
      <div className="col-counter">
        <Button
          variant="text"
          disabled={disabled}
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
          disabled={disabled}
          className={classes.ItemButton}
          onClick={addItem}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
