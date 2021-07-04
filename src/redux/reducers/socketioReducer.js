import { CLIENT_CONNECTED } from "../actions/types";

const initialState = {
  connectedClients: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_CONNECTED:
      const connectedClients = action.payload;
      return { ...state, connectedClients };
    default:
      return state;
  }
};
