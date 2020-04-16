import React from "react";
import { connect } from "react-redux";
import { fetchText } from "../../redux/actions/typerActions";
import TextBlock from "./TextBlock";

class Typer extends React.Component {
  componentDidMount() {
    this.props.fetchText();
  }

  render() {
    return <TextBlock text={this.props.text} />;
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.typer.text,
  };
};

export default connect(mapStateToProps, { fetchText })(Typer);
