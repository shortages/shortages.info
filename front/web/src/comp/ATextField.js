import React from "react";
import { useStyles } from "../lib/styles";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    minWidth: "25em"
  }
};

const StyledTextField = withStyles(styles)(TextField);

export default props => {
  const classes = useStyles();

  return (
    <div className={classes.formInputBox}>
      <StyledTextField
        // classes={{ root: classes.formInput }}
        variant="outlined"
        {...props}
      />
    </div>
  );
};
