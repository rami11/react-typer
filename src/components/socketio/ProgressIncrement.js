import React from "react";
import { connect } from "react-redux";

const ProgressIncrement = (props) => {
  return <span>{'a'}</span>;
};

const mapStateToProps = (state) => {
  return {
    // isSuccess: state.socketio.connectedClients[props.clientId].isSuccessPosition[props.position],
  };
};

export default connect(null, {})(ProgressIncrement);
