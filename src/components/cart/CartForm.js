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
import {
  addDoc,
  collection,
  Timestamp,
  documentId,
  query,
  where,
  getDocs,
  writeBatch,
} from "firebase/firestore";
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
  InputText: { margin: "5px", flex: "0 0 45%" },
  SubmitButton: { margin: "5px" },
  CardRow: { margin: "5px", display: "flex", flexWrap: "wrap" },
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
    const country = e.target.frmCountry.value;

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
        country,
      },
      items: { items },
      orderDate: Timestamp.fromDate(new Date()),
      total,
    };

    const cartItems = items.map((cartItem) => ({
      id: cartItem.productId,
      quantity: cartItem.quantity,
    }));
    const prodRef = collection(db, "products");
    const prodQuery = query(
      prodRef,
      where(
        documentId(),
        "in",
        cartItems.map((i) => i.id)
      )
    );
    const itemsToUpdate = await getDocs(prodQuery);
    const prodsNoStock = [];
    const batch = writeBatch(db);
    try {
      itemsToUpdate.docs.forEach((docSnapShot, idx) => {
        if (docSnapShot.data().stock >= cartItems[idx].quantity) {
          batch.update(docSnapShot.ref, {
            stock: docSnapShot.data().stock - cartItems[idx].quantity,
          });
          console.log("actualiza cantidad");
        } else {
          prodsNoStock.push({ ...docSnapShot.data(), id: docSnapShot.id });
          console.log("no alcanza stock");
        }
      });
    } catch (err) {
      console.log(err);
    }

    if (prodsNoStock.length === 0) {
      await batch.commit();
      const ordersCollection = collection(db, "orders");
      const docDetails = await addDoc(ordersCollection, oBuy);
      setOrderId(docDetails.id);
    } else {
      setOrderId(0);
    }
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
            <TextField
              required
              id="frmName"
              name="frmName"
              label="Name"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmLastname"
              name="frmLastname"
              label="Lastname"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmEmail"
              name="frmEmail"
              label="Email"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmPhone"
              name="frmPhone"
              label="Phone"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmAddress"
              name="frmAddress"
              label="Address"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmPostalCode"
              name="frmPostalCode"
              label="Postal Code"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmCity"
              name="frmCity"
              label="City"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmState"
              name="frmState"
              label="State"
              className={classes.InputText}
            />
            <TextField
              required
              id="frmCountry"
              name="frmCountry"
              label="Country"
              className={classes.InputText}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.SubmitButton}
          >
            Buy
          </Button>
        </form>
      </CardContent>
      <OrderData orderId={orderId} />
    </Card>
  );
};

export default CartForm;
