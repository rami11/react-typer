import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import clsx from "clsx";

const styles = (theme) => ({
  keyPressed: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
});

const Key = withStyles(styles)((props) => {
  const classes = props.classes;

  const className = !props.isKeyPressed
    ? props.className
    : clsx(classes.keyPressed, props.className);

  return (
    <Box bgcolor="white" key={props.keyCode} className={className}>
      <div>{props.char1}</div>
      <div>{props.char2}</div>
    </Box>
  );
});

const mapStateToProps = (state, ownProps) => {
  return {
    isKeyPressed: state.typer.keys[ownProps.code],
  };
};

export default connect(mapStateToProps)(Key);
