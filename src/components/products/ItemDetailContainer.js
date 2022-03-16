import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import { getProducts } from "../../helpers/getProducts";
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

function ItemDetailContainer() {
  const classes = useStyles();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(
      (res) => {
        setProduct(res.find((prod) => prod.id === "1"));
        console.log(product);
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
          <ItemDetail
            key={product.id}
            category={product.category}
            name={product.name}
            description={product.description}
            brand={product.brand}
            imgUrl={product.imgUrl}
            price={product.price}
            initial={product.initial}
            stock={product.stock}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetailContainer;
