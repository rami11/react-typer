import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

const SummaryBlock = (props) => {
  return (
    <Box
      style={{ margin: "16px", borderRadius: "4px" }}
      bgcolor="text.primary"
      color="background.paper"
      p={2}
    >
      Errors: {props.errorCount}, Accuracy: {props.accuracyPercentage}%, Speed:{" "}
      {props.speed} CPM
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    errorCount: state.typer.errorCount,
    accuracyPercentage: state.typer.accuracyPercentage,
    speed: state.typer.speed,
  };
};

export default connect(mapStateToProps)(SummaryBlock);
