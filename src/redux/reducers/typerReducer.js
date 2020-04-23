import { FETCH_TEXT, NEXT_CHAR, SET_KEYCODE } from "../actions/types";

const initialState = {
  activeKeyCode: null,
  quote: null,
  source: "",
  currentCharIndex: 0,
  isSuccess: [],
  isVisited: [],
  errorCount: 0,
  charSuccessCount: 0,
  charTypedCount: 0,
  accuracyPercentage: 0,
  initTime: Date.now(),
  speed: 0,
  isTextEndReached: false,
};

export default (state = initialState, action) => {
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
        speed: action.payload.speed,
        isTextEndReached: action.payload.isTextEndReached,
      };
    case SET_KEYCODE:
      return { ...state, activeKeyCode: action.payload };
    default:
      return state;
  }
};
