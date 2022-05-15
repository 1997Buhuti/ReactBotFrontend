import { SAVE_INTENTS } from "./types";

export function saveIntents(intent) {
  return {
    type: SAVE_INTENTS,
    payload: intent,
  };
}
