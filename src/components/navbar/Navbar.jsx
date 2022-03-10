import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../imgs/logo.png";
import CartWidget from "../cart/CartWidget.js";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "130px",
  },
  abStyles: {
    backgroundColor: "#333",
  },
  offset: theme.mixins.toolbar,
  menuOption: {
    marginRight: theme.spacing(6),
    "&:hover": {
      backgroundColor: "#555",
      color: "#FFF",
    },
  },
  toolbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  menuOptionSpecial: {
    backgroundColor: "#777",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.abStyles}>
        <Toolbar className={classes.toolbar} disableGutters={true}>
          <img src={logo} alt="EcoMusic" className={classes.logo} />
          <div>
            <Button
              variant="text"
              color="inherit"
              className={`${classes.menuOptionSpecial}  ${classes.menuOption}`}
            >
              Home
            </Button>
            <Button
              variant="text"
              color="inherit"
              className={classes.menuOption}
            >
              Guitars
            </Button>
            <Button
              variant="text"
              color="inherit"
              className={classes.menuOption}
            >
              Basses
            </Button>
            <Button
              variant="text"
              color="inherit"
              className={classes.menuOption}
            >
              Keyboards
            </Button>
          </div>
          <div>
            <CartWidget />
          </div>
          <div>
            <Button
              variant="text"
              color="inherit"
              className={`${classes.menuOptionSpecial}  ${classes.menuOption}`}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
