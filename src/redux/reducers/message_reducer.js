import { SAVE_MESSAGE, CLEAR_MESSAGES } from "../actions/types";

export default function (state = { messages: [] }, action) {
  switch (action.type) {
    case SAVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case CLEAR_MESSAGES:
      return {
        state: { messages: [] },
      };
    default:
      return state;
  }
}
