import React from "react";
import { connect } from "react-redux";

const Key = (props) => {
  let s = {};
  if (props.activeKeyCode === props.code) {
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
    activeKeyCode: state.typer.activeKeyCode,
  };
};

export default connect(mapStateToProps)(Key);
