import React from "react";
import { connect } from "react-redux";
import {
  fetchText,
  nextChar,
  setKeyCode,
} from "../../redux/actions/typerActions";
import TextBlock from "./TextBlock";
import SummaryBlock from "./SummaryBlock";
import Keyboard from "./Keyboard";

class Typer extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount = () => {
    this.props.fetchText();
    this.setFocus(true);
  };

  setFocus = (value) => {
    if (!value) {
      this.ref.current.removeAttribute("tabindex");
    } else {
      this.ref.current.setAttribute("tabindex", 0);
      this.ref.current.focus();
    }
  };

  handleKeyPress = (event) => {
    this.props.nextChar(event.key);
    this.setFocus(!this.props.isTextEndReached);
  };

  handleKeyUp = (event) => {
    this.props.setKeyCode(null);
  };

  handleKeyDown = (event) => {
    console.log(event.keyCode);
    this.props.setKeyCode(event.keyCode);
  };

  render() {
    return (
      <div
        ref={this.ref}
        onKeyPress={this.handleKeyPress}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
      >
        <SummaryBlock />
        <Keyboard />
        <TextBlock />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCharIndex: state.typer.currentCharIndex,
    isTextEndReached: state.typer.isTextEndReached,
    keyCode: state.typer.keyCode,
  };
};

export default connect(mapStateToProps, { fetchText, nextChar, setKeyCode })(
  Typer
);
