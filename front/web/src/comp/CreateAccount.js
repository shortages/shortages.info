import React from "react";
import { useStyles } from "../lib/styles";
import ATextField from "./ATextField";
import Paper from "@material-ui/core/Paper";

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <Paper className={classes.formCard}>
        <ATextField label="Hospital / Care Facility Name" />
        <ATextField label="Describe the Need" />
        <ATextField label="Contact Email" />
      </Paper>
    </div>
  );
};
