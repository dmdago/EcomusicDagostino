import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemBuy from "./ItemBuy";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ItemContainer: {
    display: "flex",
    alignItems: "center",
    width: "auto",
    justifyContent: "center",
  },
}));

const ItemPanel = function ({ id, stock, name, brand, price, initial, onAdd }) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(initial);
  const [disable, setDisable] = useState(false);

  const checkStock = function () {
    if (stock === 0) setDisable(true);
  };

  useEffect(() => {
    checkStock();
  });

  const getQuantity = function (counter) {
    setQuantity(counter);
  };

  return (
    <div className={classes.ItemContainer}>
      <ItemCount
        stock={stock}
        initial={initial}
        disabled={disable}
        getQuantity={getQuantity}
      />
      <ItemBuy
        stock={stock}
        onAdd={onAdd}
        name={name}
        brand={brand}
        price={price}
        quantity={quantity}
        disabled={disable}
        id={id}
      />
    </div>
  );
};

export default ItemPanel;
