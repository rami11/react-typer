import React from "react";
import { connect } from "react-redux";
import { broadcastProgress } from '../../redux/actions/socketioActions'

const ClientProgressIndicator = (props) => {
  return <div>This is the progress indicator!</div>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { broadcastProgress })(
  ClientProgressIndicator
);
