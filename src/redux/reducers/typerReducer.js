import {
  FETCH_TEXT,
  NEXT_CHAR,
  KEY_PRESSED,
  KEY_RELEASED,
  RESET_TYPER,
} from "../actions/types";

const initialState = {
  keys: {},
  text: null, // { quote, source }
  initTime: Date.now(),
  currentPosition: 0,
  isSuccessPositions: [],
  charSuccessCount: 0,
  errorCount: 0,
  speed: 0,
  accuracy: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEXT:
      const quote = action.payload.quote;
      const source = action.payload.source;
      const text = { quote, source };

      return { ...state, text };
    case RESET_TYPER:
      return { ...initialState, isSuccess: [], isVisited: [] };
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
    case KEY_PRESSED:
      state.keys[action.payload] = true;
      return { ...state, keys: state.keys };
    case KEY_RELEASED:
      state.keys[action.payload] = false;
      return { ...state, keys: state.keys };
    default:
      return state;
  }
};
