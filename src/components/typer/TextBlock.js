import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

class TextBlock extends React.Component {
  renderChar = (char, index) => {
    let style = {};

    if (index === this.props.currentCharIndex) {
      style = { ...style, textDecoration: "underline" };
    }

    let charStyle;
    if (this.props.isVisited[index]) {
      charStyle = this.props.isSuccess[index]
        ? { color: "lightgreen" }
        : { backgroundColor: "red" };
    }

    style = { ...style, ...charStyle };

    return (
      <span style={style} key={index}>
        {char}
      </span>
    );
  };

  populateContent = (quote, source) => {
    if (!(quote && source)) {
      return <LinearProgress />;
    }

    const chars = Object.values(quote).map((char, index) =>
      this.renderChar(char, index)
    );

    return (
      <React.Fragment>
        “{chars}” - {source}
      </React.Fragment>
    );
  };

  render() {
    return (
      <Box
        style={{ margin: "16px", borderRadius: "4px" }}
        bgcolor="text.primary"
        color="background.paper"
        p={2}
      >
        {this.populateContent(this.props.quote, this.props.source)}
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCharIndex: state.typer.currentCharIndex,
    prevCharIndex: state.typer.prevCharIndex,
    quote: state.typer.quote,
    source: state.typer.source,
    isSuccess: state.typer.isSuccess,
    isVisited: state.typer.isVisited,
  };
};

export default connect(mapStateToProps)(TextBlock);
