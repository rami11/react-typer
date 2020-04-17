import React from "react";
import { connect } from "react-redux";
import { fetchText, nextChar } from "../../redux/actions/typerActions";
import TextBlock from "./TextBlock";

class Typer extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.props.fetchText();
    this.ref.current.focus();
  }

  render() {
    return (
      <div
        ref={this.ref}
        id="type"
        tabIndex="0"
        autoFocus
        onKeyPress={() => this.props.nextChar(this.props.currentCharIndex)}
      >
        <TextBlock
          currentCharIndex={this.props.currentCharIndex}
          text={this.props.text}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.typer.text,
    currentCharIndex: state.typer.currentCharIndex
  };
};

export default connect(mapStateToProps, { fetchText, nextChar })(Typer);
