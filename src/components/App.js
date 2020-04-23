import React from "react";
import Header from "./common/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TyperPage from "../pages/TyperPage";
import { ThemeProvider } from "react-jss";

const theme = {
  colorPrimary: "blue",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header></Header>
        <Route to="/" component={TyperPage} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
