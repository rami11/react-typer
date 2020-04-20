import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

class SummaryBlock extends React.Component {
  render() {
    return (
      <Box
        style={{ margin: "16px", borderRadius: "4px" }}
        bgcolor="text.primary"
        color="background.paper"
        p={2}
      >
        Errors: {this.props.errorCount}, Accuracy:{" "}
        {this.props.accuracyPercentage}%
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorCount: state.typer.errorCount,
    accuracyPercentage: state.typer.accuracyPercentage,
  };
};

export default connect(mapStateToProps)(SummaryBlock);
