import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Greeting: {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
  },
}));

function Greeting({ greeting }) {
  const classes = useStyles();

  return (
    <div className={classes.Greeting}>
      <Typography variant="h4">{greeting}</Typography>
    </div>
  );
}

export default Greeting;
