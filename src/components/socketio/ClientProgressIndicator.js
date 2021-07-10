import React from "react";
import { connect } from "react-redux";
import ProgressIncrement from "./ProgressIncrement";

const ClientProgressIndicator = (props) => {
  const renderView = (quote) => {
    return quote.split("").map((char, i) => <ProgressIncrement key={i} />);
  };

  return <div style={{ width: "100%" }}>{renderView(props.quote)}</div>;
};

const mapStateToProps = (state) => {
  return {
    quote: state.typer.text.quote,
  };
};

export default connect(mapStateToProps, {})(ClientProgressIndicator);
