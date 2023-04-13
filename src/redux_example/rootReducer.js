import { combineReducers } from "redux";
import { messageKey, messageReducer } from "./wishmessage/wish-message.reducer";

let rootReducer=combineReducers({
    [messageKey] : messageReducer
});
export {rootReducer}


