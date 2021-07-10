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
      const clientId = action.payload.clientId;
      const text = action.payload.text;

      const client = state.connectedClients[clientId];
      const newClient = { ...client, text };

      const newConnectedClients = {
        ...state.connectedClients,
        [clientId]: newClient,
      };

      return { ...state, connectedClients: newConnectedClients };
    case UPDATE_PROGERSS_INDICATOR:
      clientId = action.payload.clientId;
      const isSuccessPositions = action.payload.isSuccessPositions;

      client = state.connectedClients[clientId];
      newClient = { ...client, isSuccessPositions };

      newConnectedClients = {
        ...state.connectedClients,
        [clientId]: newClient,
      };

      return { ...state, connectedClients: newConnectedClients };
    default:
      return state;
  }
};
