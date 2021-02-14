import React from "react";
import { Box, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  box: {
    ...theme.block,
    padding: 8,
    margin: "0 4px",
  },
});

const Socketio = (props) => {
  const classes = props.classes;
  return (
    <Container maxWidth="sm">
      <Box className={classes.box}>something</Box>
    </Container>
  );
};

export default withStyles(styles)(Socketio);
