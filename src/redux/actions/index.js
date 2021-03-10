export const ping = () => ({ type: "PING" });

export class actions {
  static getData = (payload) => ({ type: "FETCH_DATA",payload });
}
