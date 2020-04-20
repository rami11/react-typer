import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

class TextBlock extends React.Component {
  populateContent = (quote, source) => {
    const quote1 = Object.values(quote).map((letter, index) => {
      let style = {};

      if (index === this.props.currentCharIndex) {
        style = { ...style, textDecoration: "underline" };
      }
      return (
        <span style={style} key={index}>
          {letter}
        </span>
      );
    });

    return (
      <React.Fragment>
        “{quote1}” - {source}
      </React.Fragment>
    );
  };

  render() {
    console.log("is success", this.props.isSuccess);
    if (!this.props.quote) {
      return <div>Loading...</div>;
    }

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
    quote: state.typer.quote,
    source: state.typer.source,
    isSuccess: state.typer.isSuccess,
  };
};

export default connect(mapStateToProps)(TextBlock);
