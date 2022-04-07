import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  CardContainer: {
    marginTop: "10px",
    width: "90%",
  },
}));

const CartForm = function () {
  const classes = useStyles();
  return (
    <Card className={classes.CardContainer}>
      <CardHeader
        title="Checkout Form"
        subheader="Enter your details"
      ></CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default CartForm;
