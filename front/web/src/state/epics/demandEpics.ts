import { of, Observable } from "rxjs";
import { mergeMap, map, tap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { types } from "../actions";
import { actions } from "../actions";
import Backend from "../../lib/backend";
import { PostShortageAction, CreateAccountAction } from "../../types";

const postAddressEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(types.POST_SHORTAGE),
    mergeMap((action: PostShortageAction) => {
      return of(Backend.post("/shortage", action.shortage)).pipe(
        map(actions.noAction)
      );
    })
  );

const createAccountEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(types.CREATE_ACCOUNT),
    tap(() => console.log("CREATE_ACCOUNT")),
    mergeMap((action: CreateAccountAction) => {
      const { idToken, account } = action;

      return of(
        Backend.post(
          "/account",
          {
            account
          },
          idToken
        )
      ).pipe(map(actions.noAction));
    })
  );

export const epics = [postAddressEpic, createAccountEpic];
