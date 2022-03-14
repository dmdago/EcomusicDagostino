import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({}));

const Loading = function () {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
