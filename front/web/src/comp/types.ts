import React from "react";

export const ACTION_SET_FIELD = "SET_FIELD";

export interface Shortage {
  first_name: string;
  last_name: string;
  facility: string;
  description: string;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

export interface ShortageInfoProps {
  disabled?: boolean;
  onChange: (state: Shortage | null) => void;
}

export interface ShortageActionType {
  type: typeof ACTION_SET_FIELD;
  field: string;
  value: string;
}

/* 
Shipping Address Types
 */

export interface ShippingAddressProps {
  disabled?: boolean;
  onChange: (state: Address | null) => void;
}

/*
Select Country Types
*/
export interface SelectCountryProps {
  value: string;
  onChange: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => void;
}

/*
Verify Email Types
*/
export interface VerifyEmailProps {
  value: string | null;
  onChange: (email: string | null) => void;
  onVerified: () => void;
}
