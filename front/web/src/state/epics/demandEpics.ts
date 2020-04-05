import { of, Observable } from "rxjs";
import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { types } from "../actions";
import { actions } from "../actions";
import Backend from "../../lib/backend";
import { PostShortageAction } from "../actions.d";

const postAddressEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(types.POST_SHORTAGE),
    mergeMap((action: PostShortageAction) => {
      return of(Backend.post("/shortage", action.shortage)).pipe(
        map(actions.noAction)
      );
    })
  );

export const epics = [postAddressEpic];
