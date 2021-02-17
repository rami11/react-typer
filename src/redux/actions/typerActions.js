import {
  FETCH_TEXT,
  NEXT_CHAR,
  KEY_PRESSED,
  KEY_RELEASED,
  RESET_TYPER,
} from "./types";

const baseUrl = "http://localhost:8080/api";

export const fetchText = (lan) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/text/random/${lan}`);
  let text = await res.json();
  dispatch({ type: FETCH_TEXT, payload: text });
};

export const resetTyper = () => async (dispatch) => {
  dispatch({ type: RESET_TYPER });
};

// let currentCharIndex = getState().typer.currentCharIndex;
// const quote = getState().typer.quote;

// let isSuccess = quote[currentCharIndex] === keyPressed;
// if (!isSuccess) {
//   ++getState().typer.errorCount;
// } else {
//   ++getState().typer.charSuccessCount;
// }
// ++getState().typer.charTypedCount;

// getState().typer.isSuccess.push(isSuccess);
// getState().typer.isVisited.push(true);

// const payload = {
//   currentCharIndex: ++getState().typer.currentCharIndex,
//   isSuccess: getState().typer.isSuccess,
//   isVisited: getState().typer.isVisited,
//   accuracyPercentage: calcAccuracyPercentage(
//     getState().typer.charSuccessCount,
//     getState().typer.charTypedCount
//   ),
//   speed: calcSpeed(
//     getState().typer.initTime,
//     getState().typer.charSuccessCount
//   ),
//   isTextEndReached: currentCharIndex >= Object.values(quote).length - 1,
// };

export const nextChar = (keyPressed) => async (dispatch, getState) => {
  const currentPosition = getState().typer.currentPosition;
  const errorCount = getState().typer.errorCount;
  const text = getState().typer.text;
  const quote = text ? text.quote : "";
  const charAtPosition = quote.split("")[currentPosition];

  const isSuccess = keyPressed === charAtPosition;
  const newCurrentPosition = currentPosition + 1;
  const isTextEndReached = newCurrentPosition >= quote.length;
  const newErrorCount = isSuccess ? errorCount : errorCount + 1;

  dispatch({
    type: NEXT_CHAR,
    payload: {
      currentPosition: newCurrentPosition,
      isSuccess,
      isTextEndReached,
      errorCount: newErrorCount,
    },
  });
};

const calcAccuracyPercentage = (charSuccessCount, charTypedCount) => {
  return Math.round((charSuccessCount / charTypedCount) * 100);
};

const calcSpeed = (initTime, charSuccessCount) => {
  const intervalSec = (Date.now() - initTime) / 1000;
  const speed = Math.ceil((charSuccessCount * 60) / intervalSec);
  return speed;
};

export const keyPressed = (code) => (dispatch) => {
  dispatch({ type: KEY_PRESSED, payload: code });
};

export const keyReleased = (code) => (dispatch) => {
  dispatch({ type: KEY_RELEASED, payload: code });
};
