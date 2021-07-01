import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = (theme) => ({
  textBlock: { ...theme.block, fontWeight: "bold" },
});

const TextBlock = withStyles(styles)((props) => {
  const populateQuote = (quote) => {
    return quote.split("").map((char, i) => {
      let spanStyle = {};
      if (i === props.currentPosition) {
        spanStyle = { textDecoration: "underline" };
      } else if (i < props.isSuccessPositions.length) {
        if (props.isSuccessPositions[i]) {
          spanStyle = { color: "green" };
        } else {
          spanStyle = { color: "white", backgroundColor: "red" };
        }
      }
      return (
        <span style={spanStyle} key={i}>
          {char}
        </span>
      );
    });
  };

  const populateSource = (source) => {
    return <span>{source}</span>;
  };

  const populateContent = (text) => {
    if (text) {
      const quote = text.quote;
      const source = text.source;
      return (
        <>
          {populateQuote(quote)} - {populateSource(source)}
        </>
      );
    } else {
      return <LinearProgress />;
    }
  };

  const classes = props.classes;
  const text = props.text;
  return <Box className={classes.textBlock}>{populateContent(text)}</Box>;
});

const mapStateToProps = (state) => {
  return {
    text: state.typer.text,
    currentPosition: state.typer.currentPosition,
    isSuccessPositions: state.typer.isSuccessPositions,
  };
};

export default connect(mapStateToProps)(TextBlock);
