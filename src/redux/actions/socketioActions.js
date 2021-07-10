import {
  MESSAGE_RECEIVED,
  UPDATE_PROGERSS_INDICATOR,
  UPDATE_TEXT_RECEIVED,
} from "./types";
import socket from "../../api/socketio";

export const onMessageReceived = (connectedClients) => (dispatch, getState) => {
  dispatch({
    type: MESSAGE_RECEIVED,
    payload: connectedClients,
  });
};

export const onUpdateTextReceived = (clientId, text) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_TEXT_RECEIVED,
    payload: {
      clientId,
      text,
    },
  });
};

export const broadcastProgress = (clientId) => (dispatch, getState) => {
  const isSuccessPositions = getState().typer.isSuccessPositions;

  socket.emit("progress", { clientId, isSuccessPositions });
};

export const updateProgressIndicator = (clientId) => (dispatch, getState) => {
  const isSuccessPositions = getState().typer.isSuccessPositions;

  dispatch({
    type: UPDATE_PROGERSS_INDICATOR,
    payload: {
      clientId,
      isSuccessPositions,
    },
  });
};
