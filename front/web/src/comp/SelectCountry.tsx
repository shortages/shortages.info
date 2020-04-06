import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";

import { SelectCountryProps } from "../types"


export default ({ value, onChange }: SelectCountryProps) => {

  return (
    <FormControl variant="outlined">
      <InputLabel>Country</InputLabel>
      <Select
        required
        label="Country"
        value={value}
        onChange={onChange}
        // className={classes.countrySelect}
      >
        <MenuItem value={"CA"}>Canada</MenuItem>
        {/* <MenuItem value={"US"}>United States</MenuItem> */}
      </Select>
    </FormControl>
  );
};
