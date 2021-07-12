import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import socket from "../../api/socketio";
import {
  onMessageReceived,
  onUpdateTextReceived,
  updateProgressIndicator,
} from "../../redux/actions/socketioActions";
import ClientProgressIndicator from "./ClientProgressIndicator";

const styles = (theme) => ({});

const Socketio = (props) => {
  console.log("load socket io component!");

  useEffect(() => {
    socket.on("message", (connectedClients) => {
      props.onMessageReceived(connectedClients);
    });

    socket.on("progress", (client) => {
      props.updateProgressIndicator(client.id);
    });
  }, []);

  const populateBoxes = (connectedClients) => {
    return Object.entries(connectedClients)
      // .filter(([clientId, _]) => clientId !== socket.id)
      .map(([clientId, clientInfo], i) => {
        return (
          <ClientProgressIndicator
            key={i}
            clientId={clientId}
            text={clientInfo.text}
          />
        );
      });
  };

  // const classes = props.classes;
  return (
    <Container maxWidth="sm">{populateBoxes(props.connectedClients)}</Container>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.typer.text,
    connectedClients: state.socketio.connectedClients,
  };
};

export default connect(mapStateToProps, {
  onMessageReceived,
  onUpdateTextReceived,
  updateProgressIndicator,
})(withStyles(styles)(Socketio));
