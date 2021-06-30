import {
  FETCH_TEXT,
  NEXT_CHAR,
  KEY_PRESSED,
  KEY_RELEASED,
  RESET_TYPER,
  BACKSPACE_KEY_DOWN,
} from "../actions/types";

const initialState = {
  keys: {},
  text: null, // { quote, source }
  initTime: Date.now(),
  currentPosition: 0,
  isSuccessPositions: [],
  charSuccessCount: 0,
  isTextEndReached: false,
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
      const currentPosition = action.payload.currentPosition;
      const isSuccessPositions = action.payload.isSuccessPositions;
      const charSuccessCount = action.payload.charSuccessCount;
      const isTextEndReached = action.payload.isTextEndReached;
      const errorCount = action.payload.errorCount;
      const accuracy = action.payload.accuracy;
      const speed = action.payload.speed;

      return {
        ...state,
        currentPosition,
        charSuccessCount,
        isSuccessPositions,
        isTextEndReached,
        errorCount,
        accuracy,
        speed,
      };
    case BACKSPACE_KEY_DOWN:
      const currentPosition1 = action.payload.currentPosition;
      const isSuccessPositions1 = action.payload.isSuccessPositions;
      console.log(currentPosition1);
      console.log(isSuccessPositions1);

      return {
        ...state,
        currentPosition: currentPosition1,
        isSuccessPositions: isSuccessPositions1
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
