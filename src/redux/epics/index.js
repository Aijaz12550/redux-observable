import { filter, delay, mapTo, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";

export const pingEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === "PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );

export const fetchData = (action$) => {
  action$.pipe(
    filter((action) => action.type === "PING"),
    ajax(`https://api.github.com/users?per_page=5`).pipe(
      map((userResponse) => console.log("users: ", userResponse)),
      catchError((error) => {
        console.log("error: ", error);
        return of(error);
      })
    )
  );
};
