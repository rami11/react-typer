import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Typer from "../components/typer/Typer";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "react-jss";

const theme = {
  colorPrimary: "blue",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header></Header>
        <Container maxWidth="sm">
          <Route to="/" component={Typer} />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
