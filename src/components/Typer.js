import React from "react";
import { connect } from "react-redux";
import { fetchText } from "../redux/actions/typerActions";

class Typer extends React.Component {
  componentDidMount() {
    this.props.fetchText();
  }

  render() {
    return <div>{this.props.text.quote}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.typer.text,
  };
};

export default connect(mapStateToProps, { fetchText })(Typer);
