import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ItemCount from "./ItemCount.js";

const useStyles = makeStyles((theme) => ({
  CartButtonDetail: {
    fontSize: "1rem",
    padding: 0,
  },
  CardDetail: {
    width: "100%",
    margin: "20px",
  },
  CardImageDetail: {
    maxWidth: "90%",
    margin: "auto",
  },
}));

const Item = function ({
  id,
  category,
  description,
  stock,
  initial,
  name,
  brand,
  imgUrl,
  price,
}) {
  const classes = useStyles();
  const addToCart = function (quantity) {
    if (quantity > 0) {
      alert(`Se agrego ${quantity} ${name} ${brand} al carrito`);
    } else {
      alert("Seleccione una cantidad");
    }
  };
  return (
    <Card className={classes.CardDetail}>
      <CardMedia
        component="img"
        src={process.env.PUBLIC_URL + imgUrl}
        className={classes.CardImageDetail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Product:</b> {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <b>Brand:</b> {brand}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          <b>Category:</b> {category}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          <b>Description:</b> {description}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          <b>Price: </b> $ {price}
        </Typography>
        <ItemCount stock={stock} initial={initial} onAdd={addToCart} />
      </CardContent>
    </Card>
  );
};

export default Item;
