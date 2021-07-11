import React, { useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import socket from "../../api/socketio";
import {
  onMessageReceived,
  onUpdateTextReceived,
  updateProgressIndicator,
} from "../../redux/actions/socketioActions";
import ClientProgressIndicator from "./ClientProgressIndicator";

const styles = (theme) => ({
  box: {
    ...theme.block,
    padding: 8,
    margin: "4px 0",
  },
});

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
    return Object.values(connectedClients).map((client, i) => {
      return (
        <Box className={props.classes.box} key={i}>
          <div>{client.id}</div>
          <ClientProgressIndicator clientId={client.id} />
        </Box>
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
