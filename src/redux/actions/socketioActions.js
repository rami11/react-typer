import { CLIENT_CONNECTED } from "./types";

export const onClientConnected = (connectedClients) => (dispatch, getState) => {
  dispatch({
    type: CLIENT_CONNECTED,
    payload: connectedClients,
  });
};
