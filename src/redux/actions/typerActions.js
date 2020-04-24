import { FETCH_TEXT, NEXT_CHAR, SET_KEYCODE } from "./types";

const baseUrl = "http://localhost:5000";

export const fetchText = () => async (dispatch) => {
  const res = await fetch(`${baseUrl}/text/random/en`);
  let text = await res.json();
  dispatch({ type: FETCH_TEXT, payload: text });
};

export const nextChar = (keyPressed) => async (dispatch, getState) => {
  let currentCharIndex = getState().typer.currentCharIndex;
  const quote = getState().typer.quote;

  let isSuccess = quote[currentCharIndex] === keyPressed;
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
    speed: calcSpeed(
      getState().typer.initTime,
      getState().typer.charSuccessCount
    ),
    isTextEndReached: currentCharIndex >= Object.values(quote).length - 1,
  };
  dispatch({ type: NEXT_CHAR, payload });
};

const calcAccuracyPercentage = (charSuccessCount, charTypedCount) => {
  return Math.round((charSuccessCount / charTypedCount) * 100);
};

const calcSpeed = (initTime, charSuccessCount) => {
  const intervalSec = (Date.now() - initTime) / 1000;
  const speed = Math.ceil((charSuccessCount * 60) / intervalSec);
  return speed;
};

export const setKeyCode = (keyCode) => (dispatch) => {
  dispatch({ type: SET_KEYCODE, payload: keyCode });
};
