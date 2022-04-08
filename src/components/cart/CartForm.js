import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useCartContext } from "./CartContext.js";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import OrderData from "../orders/OrderData";
import db from "../../utils/firebase";

const useStyles = makeStyles((theme) => ({
  CardContainer: {
    marginTop: "10px",
    width: "45%",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  InputText: { flex: 1 },
  CardRow: { flex: 1, flexDirection: "row", margin: "5px" },
}));

const CartForm = function () {
  const classes = useStyles();
  const { items } = useCartContext();
  const aPrices = items.map((product) => product.price * product.quantity);
  const total = aPrices.flat().reduce((acc, sum) => acc + sum);
  const [orderId, setOrderId] = useState([]);

  const sendOrder = async (e) => {
    e.preventDefault();
    const name = e.target.frmName.value;
    const lastname = e.target.frmLastname.value;
    const email = e.target.frmEmail.value;
    const phone = e.target.frmPhone.value;
    const address = e.target.frmAddress.value;
    const postalcode = e.target.frmPostalCode.value;
    const city = e.target.frmCity.value;
    const state = e.target.frmState.value;

    const oBuy = {
      buyer: {
        name,
        lastname,
        email,
        phone,
        address,
        postalcode,
        city,
        state,
      },
      items: { items },
      orderDate: Timestamp.fromDate(new Date()),
      total,
    };

    const ordersCollection = collection(db, "orders");
    const docDetails = await addDoc(ordersCollection, oBuy);
    setOrderId(docDetails.id);
  };

  return (
    <Card className={classes.CardContainer}>
      <CardHeader
        title="Checkout Form"
        subheader="Enter your details"
      ></CardHeader>
      <CardContent className={classes.CardContent}>
        <form onSubmit={sendOrder}>
          <div className={classes.CardRow}>
            <TextField required id="frmName" name="frmName" label="Name" />
            <TextField required id="frmEmail" name="frmEmail" label="Email" />
            <TextField
              required
              id="frmLastname"
              name="frmLastname"
              label="Lastname"
            />
          </div>
          <div className={classes.CardRow}>
            <TextField
              required
              id="frmAddress"
              name="frmAddress"
              label="Address"
            />
            <TextField required id="frmPhone" name="frmPhone" label="Phone" />
            <TextField
              required
              id="frmPostalCode"
              name="frmPostalCode"
              label="Postal Code"
            />
          </div>
          <div className={classes.CardRow}>
            <TextField required id="frmCity" name="frmCity" label="City" />
            <TextField required id="frmState" name="frmState" label="State" />
            <div className={classes.CardRow}></div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Buy
            </Button>
          </div>
        </form>
      </CardContent>
      <OrderData orderId={orderId} />
    </Card>
  );
};

export default CartForm;
