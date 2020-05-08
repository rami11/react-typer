import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const ResetButton = withTranslation()((props) => {
  const onResetButtonClick = () => window.location.reload();

  useEffect(() => {
    ref.current.focus();
  });

  const ref = useRef(null);
  return (
    <Button
      ref={ref}
      tabIndex={0}
      onClick={onResetButtonClick}
      style={{ display: props.isTextEndReached ? "inline-block" : "none" }}
      variant="outlined"
    >
      {props.t("reset")}
    </Button>
  );
});

const mapStateToProps = (state) => {
  return {
    isTextEndReached: state.typer.isTextEndReached,
  };
};

export default connect(mapStateToProps)(ResetButton);
