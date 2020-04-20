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
    this.ref.current.focus();
  };

  render() {
    return (
      <div
        ref={this.ref}
        tabIndex="0"
        autoFocus
        onKeyPress={(event) => this.props.nextChar(event.key)}
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
  };
};

export default connect(mapStateToProps, { fetchText, nextChar })(Typer);
