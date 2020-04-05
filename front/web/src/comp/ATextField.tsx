import React from "react";
import TextField from "@material-ui/core/TextField";

import { styled } from "@material-ui/core/styles";


import {OutlinedTextFieldProps, FilledTextFieldProps, TextFieldProps } from "@material-ui/core"

// const styles = {
//   root: {
//     // minWidth: "20em"
//     // width: "100%"
//     // margin: "0 1em"
//   }
// };

// const StyledTextField = withStyles(styles)(TextField);

const StyledTextField = styled(TextField)({
  // width: props.width,
  margin: ".25em 0em"
  // ...props
});

// interface ATextFieldProps {
//   value : string,
//   onChange :  (event : MouseEvent<HTMLButtonElement>) => void,


// }
// React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;

// BaseTextFieldProps & { onChange: FilledInputProps['onChange'] } 

interface ATextFieldProps extends Omit<TextFieldProps, "variant"> {
  [key:string]: any
}


export default ({
  value,
  onChange,
  label,
  required,
  disabled,
  multiline,
  rows = 1,
  variant,
  ...props
} : ATextFieldProps) => {
  // const classes = useStyles();


  let display
  if (disabled) {
    display = <StyledTextField
      // classes={{ root: classes.formInput }}
      required
      multiline
      rows={rows}
      variant="filled"
      value={value}
      onChange={onChange}
      disabled={disabled}
      label={label}
      style={{ ...props }}
     />

  } else {

    display = <StyledTextField
      // classes={{ root: classes.formInput }}
      required
      multiline
      rows={rows}
      variant="outlined"
      value={value}
      onChange={onChange}
      disabled={disabled}
      label={label}
      style={{ ...props }
    }/>
  }
  return display
};
