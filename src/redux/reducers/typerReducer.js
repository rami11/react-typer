const INITIAL_STATE = {
  text: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
