import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = (theme) => ({
  textBlock: theme.block,
});

const TextBlock = withStyles(styles)((props) => {
  const populateQuote = (quote) => {
    return quote.split("").map((char, i) => {
      const textDecoration = i === props.currentPosition ? "underline" : "none";

      let backgroundColor = "white";
      let color = "black";
      if (i < props.isSuccessPositions.length) {
        backgroundColor = props.isSuccessPositions[i] ? "green" : "red";
        color = "white";
      }
      console.log('background color', backgroundColor);
      return (
        <span key={i} style={{ color, backgroundColor, textDecoration }}>
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
  console.log(text);
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
