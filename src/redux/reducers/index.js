export const pingReducer = (state = { isPinging:false }, action) => {
    switch(action.type){
        case "PING":
            return {
                isPinging: true
            }
        case "PONG":
            return {
                isPinging: false
            }
        case "FETCH_DATA_LOADING":
            return {
                loading: true,
                
            }
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}