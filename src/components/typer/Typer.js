import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchText } from "../../redux/actions/typerActions";
import { withStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";
import ResetButton from "./ResetButton";

import TextBlock from "./TextBlock";
import SummaryBlock from "./SummaryBlock";
import Keyboard from "./Keyboard";
import socket from "../../api/socketio";
import { onClientConnected } from "../../redux/actions/typerActions";

const styles = {
  bottom: {
    textAlign: "center",
    marginBottom: "8px",
  },
};

const Typer = ({ text, ...props }) => {
  useEffect(() => {
    text || props.fetchText(props.i18n.language);

    text &&
      socket.on("connect", () => {
        props.onClientConnected(socket.id);
        socket.emit("update_text", text);
      });
  }, [text]);

  const classes = props.classes;
  return (
    <Container maxWidth="sm">
      <SummaryBlock />
      <Keyboard setFocus={props.setKeyboardFocus} setRef={props.setRef} />
      <div className={classes.bottom}>
        <TextBlock />
        <ResetButton />
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.typer.text,
  };
};

export default connect(mapStateToProps, { fetchText, onClientConnected })(
  withStyles(styles)(withTranslation()(Typer))
);
