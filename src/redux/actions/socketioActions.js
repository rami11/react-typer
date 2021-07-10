import { MESSAGE_RECEIVED, UPDATE_PROGERSS_INDICATOR } from "./types";
import socket from "../../api/socketio";



export const onMessageReceived = (connectedClients) => (dispatch, getState) => {
  dispatch({
    type: MESSAGE_RECEIVED,
    payload: connectedClients,
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
