import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./redux/store";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./locale/I18n";

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <App></App>
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
