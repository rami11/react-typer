import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import TyperPage from "../pages/TyperPage";
import Header from "./common/Header";
import { blue, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  block: {
    margin: "16px",
    padding: "16px",
    borderRadius: "4px",
    backgroundColor: grey[50],
    color: "black",
    border: "1px solid",
  },
  palette: {
    primary: blue,
    secondary: {
      main: blue[500],
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header></Header>
        <Route to="/" component={TyperPage} />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
