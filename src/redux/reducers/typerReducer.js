import { FETCH_TEXT, NEXT_CHAR } from "../actions/types";
const INITIAL_STATE = {
  text: "",
  currentCharIndex: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TEXT:
      return { ...state, text: action.payload };
    case NEXT_CHAR:
      return { ...state, currentCharIndex: action.payload };
    default:
      return state;
  }
};
