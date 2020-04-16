import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Typer from "./Typer";
import { Container } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Container maxWidth="sm">
          <Route to="/" component={Typer} />
        </Container>
      </Router>
    );
  }
}

export default App;
