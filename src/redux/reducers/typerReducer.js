import { FETCH_TEXT, NEXT_CHAR } from "../actions/types";
const INITIAL_STATE = {
  quote: null,
  source: "",
  currentCharIndex: 0,
  prevCharIndex: 0,
  isSuccess: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TEXT:
      const quote = { ...action.payload.quote };
      const source = action.payload.source;
      return { ...state, quote, source };
    case NEXT_CHAR:
      return {
        ...state,
        prevCharIndex: action.payload.prevCharIndex,
        currentCharIndex: action.payload.currentCharIndex,
        isSuccess: action.payload.isSuccess,
      };
    default:
      return state;
  }
};
