import React from "react";

export const ACTION_SET_FIELD = "SET_FIELD";

export interface Account {
  first_name: string;
  last_name: string;
  org_name: string;
  position: string;
  email: string;
  locations?: [Location];
}

export interface Location {
  facility: string;
  address: Address;
  shortages: [Shortage];
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

export interface Shortage {
  description: string;
}

export interface ShortageActionType {
  type: typeof ACTION_SET_FIELD;
  field: string;
  value: string;
}

export interface ShortageInfoProps {
  disabled?: boolean;
  onChange: (state: Shortage | null) => void;
}

/* 
Shipping Address Props
 */

export interface ShippingAddressProps {
  disabled?: boolean;
  onChange: (state: Address | null) => void;
}

/*
Select Country Props
*/
export interface SelectCountryProps {
  value: string;
  onChange: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => void;
}

/*
Account Details Input Props
*/
export interface AccountDetailsInputProps {
  // value: string | null;
  // onChange: (email: string | null) => void;
  onVerified: () => void;
}

export interface PostShortageAction {
  type: string;
  shortage: Shortage;
}

export interface CreateAccountAction {
  type: string;
  account: Account;
  idToken: string;
}
