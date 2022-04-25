import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  OrderId: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: "15px",
  },
}));

function OrderData({ orderId }) {
  const classes = useStyles();
  let message = "";

  if (orderId.length > 0) {
    message = (
      <>
        Your order was generated with the following id: <b>{orderId}</b>
      </>
    );
  } else if (orderId === false) {
    message = (
      <>
        <b>Your order has products without stock, please review it.</b>
      </>
    );
  }

  return (
    <div className={classes.OrderId}>
      <p>{message}</p>
    </div>
  );
}

export default OrderData;
