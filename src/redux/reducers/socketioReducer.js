import {
  MESSAGE_RECEIVED,
  UPDATE_PROGERSS_INDICATOR,
  UPDATE_TEXT_RECEIVED,
} from "../actions/types";

const initialState = {
  connectedClients: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      const connectedClients = action.payload;
      return { ...state, connectedClients };
    case UPDATE_TEXT_RECEIVED:
      let clientId = action.payload.clientId;
      let text = action.payload.text;

      let client = state.connectedClients[clientId];
      let newClient = { ...client, text };

      let newConnectedClients = {
        ...state.connectedClients,
        [clientId]: newClient,
      };

      return { ...state, connectedClients: newConnectedClients };
    case UPDATE_PROGERSS_INDICATOR:
      const clientId1 = action.payload.clientId;
      const isSuccessPositions = action.payload.isSuccessPositions;

      const client1 = state.connectedClients[clientId1];
      const newClient1 = { ...client1, isSuccessPositions };

      const newConnectedClients1 = {
        ...state.connectedClients,
        [clientId1]: newClient1,
      };

      return { ...state, connectedClients: newConnectedClients1 };
    default:
      return state;
  }
};
