import React, { MouseEvent, FunctionComponent } from "react";
import { useStyles } from "../lib/styles";
import Button from "@material-ui/core/Button";

interface AButtonProps {
  onClick: (event : MouseEvent<HTMLButtonElement>) => void,
  [key:string]: any
}

const AButton : FunctionComponent<AButtonProps> = ({ onClick, disabled = false, children, ...props }) => {
  const classes = useStyles(props);
  return (
    <Button
      className={classes.button}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AButton