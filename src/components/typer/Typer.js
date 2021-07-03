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

const styles = {
  bottom: {
    textAlign: "center",
    marginBottom: '8px'
  },
};

const Typer = (props) => {
  useEffect(() => {
    props.fetchText(props.i18n.language);
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
};

export default connect(null, { fetchText })(
  withStyles(styles)(withTranslation()(Typer))
);
