import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";

const styles = (theme) => ({
  summaryBlock: { ...theme.block, padding: 12, display: "flex" },
  box: {
    ...theme.block,
    color: "white",
    padding: 8,
    margin: "0 4px",
    backgroundColor: theme.palette.primary.main,
  },
});

const SummaryBlock = (props) => {
  const classes = props.classes;
  return (
    <Box className={classes.summaryBlock}>
      <Box className={classes.box}>
        {props.t("errors")} {props.errorCount}
      </Box>
      <Box className={classes.box}>
        {props.t("accuracy")} {props.accuracyPercentage}%
      </Box>
      <Box className={classes.box}>
        {props.t("speed")} {props.speed} CPM
      </Box>
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

export default connect(mapStateToProps)(
  withStyles(styles)(withTranslation()(SummaryBlock))
);
