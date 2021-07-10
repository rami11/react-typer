import { MESSAGE_RECEIVED, UPDATE_PROGERSS_INDICATOR } from "../actions/types";

const initialState = {
  connectedClients: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      const connectedClients = action.payload;
      return { ...state, connectedClients };
    case UPDATE_PROGERSS_INDICATOR:
      const clientId = action.payload.clientId;
      const isSuccessPositions = action.payload.isSuccessPositions;

      const client = state.connectedClients[clientId];
      const newClient = { ...client, isSuccessPositions };

      const newConnectedClients = {
        ...state.connectedClients,
        [clientId]: newClient,
      };

      return { ...state, connectedClients: newConnectedClients };
    default:
      return state;
  }
};
