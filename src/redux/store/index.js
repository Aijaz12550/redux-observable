import { createStore, applyMiddleware } from "redux"
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { pingEpic, fetchData } from "../epics";
import { pingReducer} from "../reducers"

let allEpics = combineEpics(pingEpic,fetchData);

const epicMiddleware = createEpicMiddleware();

const store = createStore(pingReducer,applyMiddleware(epicMiddleware));
epicMiddleware.run(allEpics)
export default store;