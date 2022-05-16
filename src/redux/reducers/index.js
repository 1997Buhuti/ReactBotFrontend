import { combineReducers } from "redux";
import message from "./message_reducer";
import intent from "./intent_reducer";

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
