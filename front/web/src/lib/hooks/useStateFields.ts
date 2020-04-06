import { ChangeEvent, useReducer, useState, Reducer } from "react";

interface FieldAction<Field extends string> {
  field: Field;
  value: string;
}

interface ValueElement extends Element {
  value: string;
}

// type SetFieldDispatcher = (event: ChangeEvent<Element>) => boolean;
// type SetFieldDispatcher = (value: string) => boolean;

export default function useStateFields<StateType, Fields extends string>(
  initialState: StateType
): [StateType, (field: Fields, value: string) => boolean] {
  function reducer<StateType, Fields extends string>(
    state: StateType,
    action: FieldAction<Fields>
  ): StateType {
    state = {
      ...state,
      [action.field]: action.value
    };
    return state;
  }

  const [state, localDispatch] = useReducer<
    Reducer<StateType, FieldAction<Fields>>
  >(reducer, initialState);

  const setField = (field: Fields, value: string) => {
    localDispatch({
      field,
      //   value: (event.target as ValueElement).value
      value
    });
    return false;
  };

  return [state, setField];
}
