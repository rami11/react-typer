import React from "react";
import { Box } from "@material-ui/core";

class TextBlock extends React.Component {
  populateContent = text => {
    const quote = text.quote.split("").map((letter, index) => {
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
        “{quote}” - {text.source}
      </React.Fragment>
    );
  };

  render() {
    console.log(this.props.currentCharIndex);
    if (!this.props.text) {
      return <div>Loading...</div>;
    }

    return (
      <Box
        style={{ margin: "16px", borderRadius: "4px" }}
        bgcolor="text.primary"
        color="background.paper"
        p={2}
      >
        {this.populateContent(this.props.text)}
      </Box>
    );
  }
}

export default TextBlock;
