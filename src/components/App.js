import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { blue, grey } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./common/Header";
import TyperPage from "../pages/TyperPage";

const theme = createMuiTheme({
  block: {
    margin: "16px",
    padding: "16px",
    borderRadius: "4px",
    backgroundColor: grey[50],
    color: "black",
    border: `.5px solid ${blue[900]}`,
  },
  palette: {
    primary: blue,
    secondary: {
      main: blue[900],
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
