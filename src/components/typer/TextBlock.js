import React from "react";
import { Box } from "@material-ui/core";

class TextBlock extends React.Component {
  populateContent = (text) => {
    const quote = text.quote.split("").map((letter) => {
      return <span key={letter}>{letter}</span>;
    });
    return (
      <div>
        “{quote}” - {text.source}
      </div>
    );
  };

  render() {
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
