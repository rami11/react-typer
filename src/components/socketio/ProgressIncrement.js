import React from "react";
import { connect } from "react-redux";

const ProgressIncrement = ({ key, width, isSuccess }) => {
  const getBackgroundColor = () => {
    if (isSuccess === undefined) {
      return "lightgray";
    } else {
      return isSuccess ? "green" : "red";
    }
  };

  return (
    <div
      key={key}
      style={{
        backgroundColor: getBackgroundColor(),
        display: "inline-block",
        width: `${width}%`,
        height: "15px",
      }}
    ></div>
  );
};

export default connect(null, {})(ProgressIncrement);
