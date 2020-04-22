import React from "react";
import { connect } from "react-redux";
import { fetchText } from "../../redux/actions/typerActions";

import TextBlock from "./TextBlock";
import SummaryBlock from "./SummaryBlock";
import Keyboard from "./Keyboard";

class Typer extends React.Component {
  constructor(props) {
    super(props);
    this.keyboardRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.fetchText();
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <SummaryBlock />
        <Keyboard />
        <TextBlock />
      </div>
    );
  }
}

export default connect(null, { fetchText })(Typer);
