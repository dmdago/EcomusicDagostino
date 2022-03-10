import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import musicinst from "../../imgs/electricguitar.png";
import ItemCount from "./ItemCount.js";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "350px",
    margin: "20px",
  },
  cardimage: {
    maxWidth: "90%",
    margin: "auto",
  },
}));

function ItemListContainer({ greeting }) {
  const classes = useStyles();

  const addToCart = function (quantity) {
    if (quantity > 0) {
      alert(`Se agrego ${quantity} ${greeting} al carrito`);
    } else {
      alert("Seleccione una cantidad");
    }
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={musicinst}
        className={classes.cardimage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {greeting}
        </Typography>
        <ItemCount stock={5} initial={0} onAdd={addToCart} />
      </CardContent>
    </Card>
  );
}

export default ItemListContainer;
