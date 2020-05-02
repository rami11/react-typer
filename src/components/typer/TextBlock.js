import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = (theme) => ({
  textBlock: theme.block,
});

const TextBlock = withStyles(styles)((props) => {
  const renderChar = (char, index) => {
    let style = {};

    if (index === props.currentCharIndex) {
      style = { ...style, textDecoration: "underline" };
    }

    let charStyle;
    if (props.isVisited[index]) {
      charStyle = props.isSuccess[index]
        ? { color: "green" }
        : { color: "white", backgroundColor: "red" };
    }

    style = { ...style, ...charStyle };

    return (
      <span style={style} key={index}>
        {char}
      </span>
    );
  };

  const populateContent = (quote, source) => {
    if (!(quote && source)) {
      return <LinearProgress />;
    }

    const chars = Object.values(quote).map((char, index) =>
      renderChar(char, index)
    );

    return (
      <React.Fragment>
        “{chars}” - {source}
      </React.Fragment>
    );
  };

  const classes = props.classes;
  return (
    <Box className={classes.textBlock}>
      {populateContent(props.quote, props.source)}
    </Box>
  );
});

const mapStateToProps = (state) => {
  return {
    currentCharIndex: state.typer.currentCharIndex,
    quote: state.typer.quote,
    source: state.typer.source,
    isSuccess: state.typer.isSuccess,
    isVisited: state.typer.isVisited,
  };
};

export default connect(mapStateToProps)(TextBlock);
