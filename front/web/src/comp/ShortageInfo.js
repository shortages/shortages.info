import React, { useReducer } from "react";
import ATextField from "./ATextField";

const ACTION_SET_FIELD = "SET_FIELD";

const initialState = {
  facility: "",
  contactName: "",
  description: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_SET_FIELD:
      state = {
        ...state,
        [action.field]: action.value
      };
      break;
    default:
      break;
  }
  return state;
};

export default ({ disabled, onChange }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log("State", state);

  const setShortageField = field => event => {
    // console.log(`Setting ${field} ${event.target.value}`);
    dispatch({
      type: ACTION_SET_FIELD,
      field,
      value: event.target.value
    });
    return false;
  };
  if (state.facility && state.contactName && state.description) {
    onChange(state);
  } else {
    onChange(null);
  }

  return (
    <>
      <ATextField
        required
        disabled={disabled}
        value={state.facility}
        onChange={setShortageField("facility")}
        label="Hospital / Care Facility Name"
      />
      <ATextField
        required
        disabled={disabled}
        label="Contact Name"
        value={state.contactName}
        onChange={setShortageField("contactName")}
      />
      <ATextField
        multiline
        disabled={disabled}
        required
        rows={4}
        value={state.description}
        onChange={setShortageField("description")}
        label="Describe the Shortage"
      />
    </>
  );
};
