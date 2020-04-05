import { Shortage, PostShortageAction } from "./actions.d";

export const types = {
  NO_ACTION: "NO_ACTION",
  POST_SHORTAGE: "POST_SHORTAGE"
};

export const actions = {
  noAction: () => ({
    type: types.NO_ACTION
  }),

  postShortage: (shortage: Shortage): PostShortageAction => ({
    type: types.POST_SHORTAGE,
    shortage
  })
};
