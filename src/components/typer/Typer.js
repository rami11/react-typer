import React from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchText } from "../../redux/actions/typerActions";

import TextBlock from "./TextBlock";
import SummaryBlock from "./SummaryBlock";
import Keyboard from "./Keyboard";

class Typer extends React.Component {
  componentDidMount = () => {
    this.props.fetchText();
  };

  render() {
    return (
      <Container onClick={this.handleClick} maxWidth="sm">
        <SummaryBlock />
        <Keyboard
          setFocus={this.props.setKeyboardFocus}
          setRef={this.props.setRef}
        />
        <TextBlock />
      </Container>
    );
  }
}

export default connect(null, { fetchText })(Typer);
