import React from "react";
import { Box, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import socket from "../../api/socketio";
import { onClientConnected } from "../../redux/actions/socketioActions";
import ClientProgressIndicator from "./ClientProgressIndicator";

const styles = (theme) => ({
  box: {
    ...theme.block,
    padding: 8,
    margin: "4px 0",
  },
});

const Socketio = (props) => {
  socket.on("message", (connectedClients) => {
    props.onClientConnected(connectedClients);
  });

  const populateBoxes = (connectedClients) => {
    return Object.values(connectedClients).map((client, i) => {
      return (
        <Box className={props.classes.box} key={i}>
          <div>{client.id}</div>
          <ClientProgressIndicator clientId={client.id} />
        </Box>
      );
    });
  };

  const classes = props.classes;
  return (
    <Container maxWidth="sm">{populateBoxes(props.connectedClients)}</Container>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedClients: state.socketio.connectedClients,
  };
};

export default connect(mapStateToProps, { onClientConnected })(
  withStyles(styles)(Socketio)
);
