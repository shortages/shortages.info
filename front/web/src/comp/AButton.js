import React from "react";
import { useStyles } from "../lib/styles";
import Button from "@material-ui/core/Button";

export default ({ onClick, disabled, ...props }) => {
  const classes = useStyles(props);
  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={onClick}
      disabled={disabled}
    >
      {props.children}
    </Button>
  );
};
