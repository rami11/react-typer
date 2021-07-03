import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { blue, grey } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./common/Header";
import Footer from "./common/Footer";
import TyperPage from "../pages/TyperPage";

const theme = createMuiTheme({
  block: {
    margin: "8px 0",
    padding: "16px",
    borderRadius: "4px",
    backgroundColor: grey[50],
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
    border: ".5px solid #d4d2d0",
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
        <Footer></Footer>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
