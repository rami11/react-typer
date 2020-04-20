import React from "react";
import { connect } from "react-redux";
import { fetchText, nextChar } from "../../redux/actions/typerActions";
import TextBlock from "./TextBlock";

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
        id="type"
        tabIndex="0"
        autoFocus
        onKeyPress={(event) => {
          const keyPressed = event.key;
          this.props.nextChar(keyPressed);
          if (this.props.quote[this.props.currentCharIndex] === keyPressed) {
            console.log("sucess!");
          } else {
            console.log("fail!");
          }
        }}
      >
        <TextBlock />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.typer.quote,
    source: state.typer.source,
    currentCharIndex: state.typer.currentCharIndex,
  };
};

export default connect(mapStateToProps, { fetchText, nextChar })(Typer);
