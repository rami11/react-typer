import { BROADCAST_PROGRESS, CLIENT_CONNECTED } from "./types";

export const onClientConnected = (connectedClients) => (dispatch, getState) => {
  dispatch({
    type: CLIENT_CONNECTED,
    payload: connectedClients,
  });
};

export const broadcastProgress = (clientId) => (dispatch, getState) => {
  const isSuccessPositions = getState().typer.isSuccessPositions;
  
  dispatch({
    type: BROADCAST_PROGRESS,
    payload: {
      clientId,
      isSuccessPositions
    }
  });
};
