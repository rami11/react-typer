import {
  CLIENT_CONNECTED,
  FETCH_TEXT,
  NEXT_CHAR,
  BACKSPACE_KEY_DOWN,
  KEY_PRESSED,
  KEY_RELEASED,
  RESET_TYPER,
} from "./types";

const baseUrl = "http://localhost:8082/api";

export const onClientConnected = (clientId) => (dispatch, getState) => {
  dispatch({
    type: CLIENT_CONNECTED,
    payload: clientId,
  });
};

export const fetchText = (lan) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/text/random/${lan}`);
  let text = await res.json();
  dispatch({ type: FETCH_TEXT, payload: text });
};

export const resetTyper = () => async (dispatch) => {
  dispatch({ type: RESET_TYPER });
};

export const nextChar = (keyPressed) => async (dispatch, getState) => {
  const initTime = getState().typer.initTime;
  const currentPosition = getState().typer.currentPosition;
  const isSuccessPositions = getState().typer.isSuccessPositions;
  const charSuccessCount = getState().typer.charSuccessCount;
  const errorCount = getState().typer.errorCount;
  const text = getState().typer.text;
  const quote = text ? text.quote : "";
  const charAtPosition = quote.split("")[currentPosition];

  const isSuccess = keyPressed === charAtPosition;
  const newIsSuccessPositions = isSuccessPositions.concat([isSuccess]);
  const newCurrentPosition = currentPosition + 1;
  const newCharSuccessCount = isSuccess
    ? charSuccessCount + 1
    : charSuccessCount;
  const isTextEndReached = newCurrentPosition >= quote.length;
  const newErrorCount = isSuccess ? errorCount : errorCount + 1;

  const charTypedCount = newIsSuccessPositions.length;
  const accuracy = calcAccuracyPercentage(charSuccessCount, charTypedCount);
  const speed = calcSpeed(initTime, charSuccessCount);

  dispatch({
    type: NEXT_CHAR,
    payload: {
      currentPosition: newCurrentPosition,
      isSuccessPositions: newIsSuccessPositions,
      isTextEndReached,
      charSuccessCount: newCharSuccessCount,
      errorCount: newErrorCount,
      accuracy,
      speed,
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

export const backspaceKeyPressed = () => async (dispatch, getState) => {
  const currentPosition = getState().typer.currentPosition;
  const isSuccessPositions = getState().typer.isSuccessPositions;

  const newCurrentPosition = currentPosition - 1;
  const newIsSuccessPositions = isSuccessPositions.slice(0, -1);

  dispatch({
    type: BACKSPACE_KEY_DOWN,
    payload: {
      currentPosition: newCurrentPosition,
      isSuccessPositions: newIsSuccessPositions,
    },
  });
};

export const keyPressed = (code) => (dispatch) => {
  dispatch({ type: KEY_PRESSED, payload: code });
};

export const keyReleased = (code) => (dispatch) => {
  dispatch({ type: KEY_RELEASED, payload: code });
};
