import { BROADCAST_PROGRESS, CLIENT_CONNECTED } from "../actions/types";

const initialState = {
  connectedClients: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_CONNECTED:
      const connectedClients = action.payload;
      return { ...state, connectedClients };
    case BROADCAST_PROGRESS:
      const clientId = action.payload.clientId;
      const isSuccessPositions = action.payload.isSuccessPositions;

      const client = state.connectedClients[clientId];
      const newClient = { ...client, isSuccessPositions };

      state.connectedClients[clientId] = newClient;

      return state;
    default:
      return state;
  }
};
