import { FETCH_TEXT, NEXT_CHAR } from "./types";

const baseUrl = "http://localhost:5000";

export const fetchText = () => async (dispatch) => {
  const res = await fetch(`${baseUrl}/text/random/en`);
  let text = await res.json();
  dispatch({ type: FETCH_TEXT, payload: text });
};

export const nextChar = (keyPressed) => async (dispatch, getState) => {
  const currentCharIndex = getState().typer.currentCharIndex;

  let isSuccess = getState().typer.quote[currentCharIndex] === keyPressed;
  if (!isSuccess) {
    ++getState().typer.errorCount;
  } else {
    ++getState().typer.charSuccessCount;
  }
  ++getState().typer.charTypedCount;

  getState().typer.isSuccess.push(isSuccess);
  getState().typer.isVisited.push(true);

  const payload = {
    currentCharIndex: ++getState().typer.currentCharIndex,
    isSuccess: getState().typer.isSuccess,
    isVisited: getState().typer.isVisited,
    accuracyPercentage: calcAccuracyPercentage(
      getState().typer.charSuccessCount,
      getState().typer.charTypedCount
    ),
  };
  dispatch({ type: NEXT_CHAR, payload });
};

const calcAccuracyPercentage = (charSuccessCount, charTypedCount) => {
  return Math.round((charSuccessCount / charTypedCount) * 100);
};
