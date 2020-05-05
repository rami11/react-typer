import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchText } from "../../redux/actions/typerActions";
import { withStyles } from "@material-ui/core/styles";
import ResetButton from "./ResetButton";

import TextBlock from "./TextBlock";
import SummaryBlock from "./SummaryBlock";
import Keyboard from "./Keyboard";

const styles = {
  bottom: {
    textAlign: "center",
  },
};

const Typer = withStyles(styles)((props) => {
  useEffect(() => {
    props.fetchText();
  });

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
});

export default connect(null, { fetchText })(Typer);
