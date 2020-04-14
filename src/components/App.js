import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Typer from "./Typer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Route to="/" component={Typer} />
      </Router>
    );
  }
}

export default App;
