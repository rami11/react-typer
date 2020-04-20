import React from "react";
import { connect } from "react-redux";
import { fetchText, nextChar } from "../../redux/actions/typerActions";
import TextBlock from "./TextBlock";
import SummaryBlock from "./SummaryBlock";

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

  render() {
    return (
      <div
        ref={this.ref}
        tabIndex="0"
        autoFocus
        onKeyPress={(event) => {
          this.props.nextChar(event.key);
          this.setFocus(!this.props.isTextEndReached);
        }}
      >
        <SummaryBlock />
        <TextBlock />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCharIndex: state.typer.currentCharIndex,
    isTextEndReached: state.typer.isTextEndReached,
  };
};

export default connect(mapStateToProps, { fetchText, nextChar })(Typer);
