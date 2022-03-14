import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../misc/Loading.js";

const useStyles = makeStyles((theme) => ({
  ItemsContainer: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  ItemsRow: {
    width: "calc(390px*3)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    flexGrow: 1,
    display: "flex",
    height: "50vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const productsArray = [
  {
    id: "1",
    name: "Guitar",
    brand: "Fender",
    imgUrl: "/imgs/FenderGuitar.png",
    price: 50,
    initial: 0,
    stock: 5,
  },
  {
    id: "2",
    name: "Bass Guitar",
    brand: "Gibson",
    imgUrl: "/imgs/GibsonBass.png",
    price: 100,
    initial: 0,
    stock: 10,
  },
  {
    id: "3",
    name: "Piano",
    brand: "Yamaha",
    imgUrl: "/imgs/YamahaPiano.png",
    price: 20,
    initial: 0,
    stock: 15,
  },
  {
    id: "4",
    name: "Keyboard",
    brand: "Casio",
    imgUrl: "/imgs/CasioKey.png",
    price: 20,
    initial: 0,
    stock: 20,
  },
];

function ItemListContainer() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsArray);
      }, 2000);
    });

    getProducts.then(
      (res) => {
        setProducts(res);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className={classes.box}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className={classes.ItemsContainer}>
        <div className={classes.ItemsRow}>
          {products.map((product) => (
            <Item
              key={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.imgUrl}
              price={product.price}
              initial={product.initial}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
