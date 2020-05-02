import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  summaryBlock: theme.block,
});

const SummaryBlock = withStyles(styles)((props) => {
  const classes = props.classes;
  return (
    <Box className={classes.summaryBlock}>
      Errors: {props.errorCount}, Accuracy: {props.accuracyPercentage}%, Speed:{" "}
      {props.speed} CPM
    </Box>
  );
});

const mapStateToProps = (state) => {
  return {
    errorCount: state.typer.errorCount,
    accuracyPercentage: state.typer.accuracyPercentage,
    speed: state.typer.speed,
  };
};

export default connect(mapStateToProps)(SummaryBlock);
