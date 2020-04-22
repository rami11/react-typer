import React from "react";
import { connect } from "react-redux";

const Key = (props) => {
  let s = {};
  if (props.currentKeyCode === props.keyCode) {
    s = { ...s, color: "white", backgroundColor: "#3F51B5" };
  }
  return (
    <div key={props.keyCode} className={props.className} style={s}>
      <div>{props.char1}</div>
      <div>{props.char2}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentKeyCode: state.typer.keyCode,
  };
};

export default connect(mapStateToProps)(Key);
