import { FETCH_TEXT, NEXT_CHAR } from "./types";

const baseUrl = "http://localhost:5000";

export const fetchText = () => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/text/random/en`);
    let text = await res.json();
    dispatch({ type: FETCH_TEXT, payload: text });
  };
};

export const nextChar = currentCharIndex => {
  return { type: NEXT_CHAR, payload: ++currentCharIndex };
};
