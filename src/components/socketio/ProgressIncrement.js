import React from "react";
import { connect } from "react-redux";

const ProgressIncrement = ({ key, width }) => {
  return (
    <div
      key={key}
      style={{
        backgroundColor: "grey",
        display: "inline-block",
        width: `${width}%`,
        height: "15px",
      }}
    ></div>
  );
};

export default connect(null, {})(ProgressIncrement);
