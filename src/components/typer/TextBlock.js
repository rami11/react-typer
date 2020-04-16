import React from "react";
import { Box } from "@material-ui/core";

class TextBlock extends React.Component {
  render() {
    return (
      <Box
        style={{ margin: "16px", borderRadius: "4px" }}
        bgcolor="text.primary"
        color="background.paper"
        p={2}
      >
        “{this.props.text.quote}” - {this.props.text.source}
      </Box>
    );
  }
}

export default TextBlock;
