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
  return orderId.length > 0 ? (
    <div className={classes.OrderId}>
      <p>
        Your order was generated with the following id: <b>{orderId}</b>
      </p>
    </div>
  ) : (
    ""
  );
}

export default OrderData;
