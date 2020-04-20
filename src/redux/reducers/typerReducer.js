import { FETCH_TEXT, NEXT_CHAR } from "../actions/types";
const INITIAL_STATE = {
  quote: null,
  source: "",
  currentCharIndex: 0,
  isSuccess: [],
  isVisited: [],
  errorCount: 0,
  charSuccessCount: 0,
  charTypedCount: 0,
  accuracyPercentage: 0,
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
        currentCharIndex: action.payload.currentCharIndex,
        isSuccess: action.payload.isSuccess,
        isVisited: action.payload.isVisited,
        accuracyPercentage: action.payload.accuracyPercentage,
      };
    default:
      return state;
  }
};
