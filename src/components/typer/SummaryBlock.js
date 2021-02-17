import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";

const styles = (theme) => ({
  summaryBlock: { ...theme.block, padding: 12, display: "flex" },
  box: {
    ...theme.block,
    padding: 8,
    margin: "0 4px",
  },
});

const SummaryBlock = (props) => {
  const classes = props.classes;
  return (
    <Box className={classes.summaryBlock}>
      <Box className={classes.box}>
        <b>{props.t("errors")}</b> {props.errorCount}
      </Box>
      <Box className={classes.box}>
        <b>{props.t("accuracy")}</b> {props.accuracy}%
      </Box>
      <Box className={classes.box}>
        <b>{props.t("speed")}</b> {props.speed} CPM
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    errorCount: state.typer.errorCount,
    accuracy: state.typer.accuracy,
    speed: state.typer.speed,
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(withTranslation()(SummaryBlock))
);
