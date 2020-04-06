import { Shortage, PostShortageAction, CreateAccountAction } from "../types";
import { Account } from "../types";

export const types = {
  NO_ACTION: "NO_ACTION",
  POST_SHORTAGE: "POST_SHORTAGE",
  CREATE_ACCOUNT: "CREATE_ACCOUNT"
};

export const actions = {
  noAction: () => ({
    type: types.NO_ACTION
  }),

  postShortage: (shortage: Shortage): PostShortageAction => ({
    type: types.POST_SHORTAGE,
    shortage
  }),

  createAccount: (account: Account, idToken: string): CreateAccountAction => ({
    type: types.CREATE_ACCOUNT,
    account,
    idToken
  })
};
