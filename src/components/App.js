import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import TyperPage from "../pages/TyperPage";
import Header from "./common/Header";
import { blue, yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: yellow[500]
    }
  }
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
