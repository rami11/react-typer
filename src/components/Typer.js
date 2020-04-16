import React from "react";
import { connect } from "react-redux";
import { fetchText } from "../redux/actions/typerActions";
import { Box } from "@material-ui/core";

class Typer extends React.Component {
  componentDidMount() {
    this.props.fetchText();
  }

  render() {
    return (
      <Box
        style={{ margin: "16px", borderRadius: "4px" }}
        bgcolor="text.primary"
        color="background.paper"
        p={2}
      >
        “{this.props.text.quote}” - {this.props.text.source}
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.typer.text,
  };
};

export default connect(mapStateToProps, { fetchText })(Typer);
