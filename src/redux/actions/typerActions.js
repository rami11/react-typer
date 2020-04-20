import { FETCH_TEXT, NEXT_CHAR } from "./types";

const baseUrl = "http://localhost:5000";

export const fetchText = () => async (dispatch) => {
  const res = await fetch(`${baseUrl}/text/random/en`);
  let text = await res.json();
  dispatch({ type: FETCH_TEXT, payload: text });
};

export const nextChar = (keyPressed) => async (dispatch, getState) => {
  console.log(getState().typer);
  let currentCharIndex = getState().typer.currentCharIndex;
  let prevCharIndex = currentCharIndex;
  let isSuccess = getState().typer.quote[currentCharIndex] === keyPressed;
  const payload = {
    prevCharIndex,
    currentCharIndex: ++currentCharIndex,
    isSuccess,
  };
  dispatch({ type: NEXT_CHAR, payload });
};
