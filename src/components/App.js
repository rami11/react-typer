import React from "react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
      </Router>
    );
  }
}

export default App;
