import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  emptyMessage: {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
  },
}));

function EmptyCart() {
  const classes = useStyles();

  return (
    <div className={classes.emptyMessage}>
      <Typography variant="h4">The cart is empty!</Typography>
    </div>
  );
}

export default EmptyCart;
