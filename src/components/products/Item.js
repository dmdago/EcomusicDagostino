import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ItemCount from "./ItemCount.js";

const useStyles = makeStyles((theme) => ({
  CartButton: {
    fontSize: "1rem",
    padding: 0,
  },
  Card: {
    width: "350px",
    margin: "20px",
  },
  CardImage: {
    maxWidth: "90%",
    margin: "auto",
  },
}));

const Item = function ({ id, stock, initial, name, brand, imgUrl, price }) {
  const classes = useStyles();
  const addToCart = function (quantity) {
    if (quantity > 0) {
      alert(`Se agrego ${quantity} ${name} ${brand} al carrito`);
    } else {
      alert("Seleccione una cantidad");
    }
  };

  return (
    <Card className={classes.Card}>
      <CardMedia
        component="img"
        src={process.env.PUBLIC_URL + imgUrl}
        className={classes.CardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {brand}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          $ {price}
        </Typography>
        <ItemCount stock={stock} initial={initial} onAdd={addToCart} />
      </CardContent>
    </Card>
  );
};

export default Item;
