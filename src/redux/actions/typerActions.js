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

  let isSuccess = getState().typer.quote[currentCharIndex] === keyPressed;
  if (!isSuccess) ++getState().typer.errorCount;
  getState().typer.isSuccess.push(isSuccess);

  getState().typer.isVisited.push(true);

  const payload = {
    currentCharIndex: ++currentCharIndex,
    isSuccess: getState().typer.isSuccess,
    isVisited: getState().typer.isVisited,
  };
  dispatch({ type: NEXT_CHAR, payload });
};
