import React, { useReducer } from "react";
import SelectCountry from "./SelectCountry";
import ATextField from "./ATextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default ({ onChange, disabled }) => {
  const ACTION_SET_ADDRESS_FIELD = "SET_ADDRESS_FIELD";

  const initialState = {
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "CA",
    zipcode: ""
  };

  const isValid = address => {
    const { line1, city, state, country, zipcode } = address;
    return line1 && city && state && country && zipcode;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_SET_ADDRESS_FIELD:
        state = {
          ...state,
          [action.field]: action.value
        };
        if (isValid(state)) {
          onChange(state);
        } else {
          onChange(null);
        }
      default:
        break;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const codeLabel = state.country == "US" ? "Zip Code" : "Postal Code";
  const stateLabel = state.country == "US" ? "State" : "Province";

  const setAddressField = field => event => {
    dispatch({
      type: ACTION_SET_ADDRESS_FIELD,
      field,
      value: event.target.value
    });

    return true;
  };

  return (
    <Box width="80%" alignSelf="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
      >
        <ATextField
          required
          disabled={disabled}
          label="Address Line 1"
          width="100%"
          value={state.line1}
          onChange={setAddressField("line1")}
        />
        <ATextField
          required
          disabled={disabled}
          label="Address Line 2"
          width="100%"
          value={state.line2}
          onChange={setAddressField("line2")}
        />

        <Box display="flex" alignItems="center" alignContent="center">
          <ATextField
            required
            disabled={disabled}
            label="City"
            marginRight="1em"
            value={state.city}
            onChange={setAddressField("city")}
          />
          <ATextField
            required
            disabled={disabled}
            label={stateLabel}
            value={state.state}
            onChange={setAddressField("state")}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box marginRight="1em">
            <SelectCountry
              value={state.country}
              onChange={setAddressField("country")}
            />
          </Box>

          <ATextField
            required
            disabled={disabled}
            label={codeLabel}
            minWidth="10em"
            value={state.zipcode}
            onChange={setAddressField("zipcode")}
          />
        </Box>
      </Box>
    </Box>
  );
};
