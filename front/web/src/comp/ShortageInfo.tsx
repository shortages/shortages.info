import { Shortage, ShortageActionType, ShortageInfoProps, ACTION_SET_FIELD } from "./types"

import React, { useReducer, ChangeEvent } from "react";
import ATextField from "./ATextField";

const initialState : Shortage = {
  first_name: "",
  last_name: "",
  facility: "",
  description: ""
};

const reducer = (state : Shortage, action : ShortageActionType) => {
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


export default ({ disabled, onChange } : ShortageInfoProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log("State", state);

  const setShortageField = (field : string) => (event : ChangeEvent<HTMLInputElement>) => {
    // console.log(`Setting ${field} ${event.target.value}`);
    dispatch({
      type: ACTION_SET_FIELD,
      field,
      value: (event.target as HTMLInputElement).value
    });
    return false;
  };

  if (state.facility && state.first_name && state.last_name && state.description) {
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
        label="First Name"
        value={state.first_name}
        onChange={setShortageField("first_name")}
      />
      <ATextField
        required
        disabled={disabled}
        label="Last Name"
        value={state.last_name}
        onChange={setShortageField("last_name")}
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
