import { combineEpics } from "redux-observable";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { epics as demandEpics } from "./epics/demandEpics";
import { epics as supplyEpics } from "./epics/supplyEpics";
import { createEpicMiddleware } from "redux-observable";

const rootEpic = combineEpics(...demandEpics, ...supplyEpics);

const epicMiddleware = createEpicMiddleware();

export default createStore(
  combineReducers({
    main: () => null
  }),
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);
