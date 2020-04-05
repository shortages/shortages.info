export interface Shortage {
  email: string;
  first_name: string;
  last_name: string;
  facility: string;
  description: string;
  address: Address;
}

export interface Address {
  city: string;
  country: string;
  line1: string;
  line2?: string;
  postal_code: string;
  state: string;
}

export interface PostShortageAction {
  type: string;
  shortage: Shortage;
}
