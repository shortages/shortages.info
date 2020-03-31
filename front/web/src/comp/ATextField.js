import React from "react";
import { useStyles } from "../lib/styles";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { maxWidth, textAlign } from "@material-ui/system";

import { styled } from "@material-ui/core/styles";

const styles = {
  root: {
    // minWidth: "20em"
    // width: "100%"
    // margin: "0 1em"
  }
};

// const StyledTextField = withStyles(styles)(TextField);

const StyledTextField = styled(TextField)({
  // width: props.width,
  margin: ".25em 0em"
  // ...props
});

export default ({
  value,
  onChange,
  label,
  required,
  disabled,
  multiline,
  rows = 1,
  ...props
}) => {
  const classes = useStyles();

  return (
    <StyledTextField
      // classes={{ root: classes.formInput }}
      required
      multiline
      rows={rows}
      variant={disabled ? "filled" : "outlined"}
      value={value}
      onChange={onChange}
      disabled={disabled}
      label={label}
      style={{ ...props }}
    ></StyledTextField>
  );
};
