import { filter, delay, mapTo, map, mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { of, Observable, from } from "rxjs";

export const pingEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === "PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );

export const fetchData = (action$, state$) => {
 return action$.pipe(
  // filter((action) => action.type === "FETCH_DATA"),
    ofType("FETCH_DATA"),
    // mergeMap(()=>[({type:"FETCH_DATA_LOADING"})]),
    // map(()=>({type:"FETCH_DATA_LOADING"})),
    // switchMap(()=>map(()=>({type:"FETCH_DATA_LOADING"}))),
    delay(2000),
    mergeMap(()=>of({ type: "FETCH_DATA_LOADING", })),
    delay(1000),
    switchMap(({ payload = "aijaz12550" }) =>{
      // ()=>({type:"FETCH_DATA_LOADING"}),
      return ajax
      .getJSON(`https://api.github.com/users/${payload}`)
      .pipe(
        map((response) => ({ type: "FETCH_DATA_LOADING", payload: response })),
        delay(1000),
        map((response) => ({ type: "FETCH_DATA_SUCCESS", payload: response }))
        )
    }
    )
  );
};
