import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../imgs/logo.png";
import CartWidget from "../cart/CartWidget.js";
import { useNavigate } from "react-router-dom";

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

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <AppBar className={classes.abStyles}>
        <Toolbar className={classes.toolbar} disableGutters={true}>
          <Link to="/">
            <img src={logo} alt="EcoMusic" className={classes.logo} />
          </Link>
          <div>
            <Button
              variant="text"
              color="inherit"
              className={`${classes.menuOptionSpecial}  ${classes.menuOption}`}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              variant="text"
              color="inherit"
              className={classes.menuOption}
              onClick={() => navigate("/products/guitars")}
            >
              Guitars
            </Button>
            <Button
              variant="text"
              color="inherit"
              className={classes.menuOption}
              onClick={() => navigate("/products/basses")}
            >
              Basses
            </Button>
            <Button
              variant="text"
              color="inherit"
              className={classes.menuOption}
              onClick={() => navigate("/products/keys")}
            >
              Keys
            </Button>
          </div>
          <div>
            <CartWidget />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default NavBar;
