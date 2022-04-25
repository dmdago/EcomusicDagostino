import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { IconButton, Button } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useCartContext } from "./CartContext.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cartTableContainer: {
    marginTop: "10px",
    justifyContent: "center",
    display: "flex",
    width: "45%",
  },
  cartTable: { borderCollapse: "collapse" },
  cartTableRowMain: { backgroundColor: "#333" },
  cartTableCellMain: { color: "#fff !important", textAlign: "center" },
  cartTableRowSec: { backgroundColor: "#555" },
  cartTableCellSec: { color: "#fff !important", textAlign: "center" },
  prodImg: { width: "150px" },
  menuOption: {
    backgroundColor: "#777",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
}));

const CartContent = function (total) {
  const { items, removeItem, clear } = useCartContext();
  const classes = useStyles();

  return (
    <TableContainer className={classes.cartTableContainer}>
      <Table className={classes.cartTable}>
        <TableHead>
          <TableRow className={classes.cartTableRowMain}>
            <TableCell colSpan={6} className={classes.cartTableCellMain}>
              Product
            </TableCell>
            <TableCell align="right" className={classes.cartTableCellMain}>
              Price
            </TableCell>
          </TableRow>
          <TableRow className={classes.cartTableRowSec}>
            <TableCell className={classes.cartTableCellSec}>Action</TableCell>
            <TableCell className={classes.cartTableCellSec}>Photo</TableCell>
            <TableCell className={classes.cartTableCellSec}>Name</TableCell>
            <TableCell className={classes.cartTableCellSec}>Brand</TableCell>
            <TableCell className={classes.cartTableCellSec} align="right">
              Qty.
            </TableCell>
            <TableCell className={classes.cartTableCellSec} align="right">
              Unit Price
            </TableCell>
            <TableCell className={classes.cartTableCellSec} align="right">
              Sum
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.productId}>
              <TableCell>
                <IconButton
                  size="medium"
                  onClick={() => removeItem(item.productId)}
                >
                  <Delete className={classes.CartButton} />
                </IconButton>
              </TableCell>
              <TableCell>
                <img
                  alt={item.name}
                  className={classes.prodImg}
                  src={item.imgUrl}
                ></img>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">$ {item.price}</TableCell>
              <TableCell align="right">
                $ {item.price * item.quantity}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={6}>Total</TableCell>
            <TableCell align="right">{total.total}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={7} align="center">
              <Button
                variant="text"
                color="inherit"
                className={classes.menuOption}
                onClick={() => clear(items)}
              >
                Empty Cart
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartContent;
