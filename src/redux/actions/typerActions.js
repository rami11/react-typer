import { FETCH_TEXT } from "./types";

const baseUrl = "http://localhost:5000";

export const fetchText = () => {
  return async (dispatch) => {
    const res = await fetch(`${baseUrl}/text/random/en`);
    let text = await res.json();
    console.log("text", text);

    dispatch({ type: FETCH_TEXT, payload: text });
  };
};
