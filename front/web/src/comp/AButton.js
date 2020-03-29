import React from "react";
import { useStyles } from "../lib/styles";
import Button from "@material-ui/core/Button";

export default props => {
  const classes = useStyles(props);
  return (
    <Button variant="contained" className={classes.button}>
      {props.children}
    </Button>
  );
};
