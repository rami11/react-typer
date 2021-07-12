import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ProgressIncrement from "./ProgressIncrement";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  box: {
    ...theme.block,
    padding: 8,
    margin: "4px 0",
  },
});

const ClientProgressIndicator = ({ key, clientId, text, ...props }) => {
  const getPercentList = () => {
    let percents = [];
    let oldProgress = 0;
    let percent = 0;

    const quote = text.quote;
    for (let i = 1; i <= quote.length; i++) {
      const progress = Math.ceil((i * 100) / quote.length);
      percent = progress - oldProgress;
      oldProgress = progress;
      percents.push(percent);
    }
    return percents;
  };

  const renderQuote = () => {
    const percents = getPercentList();
    return (
      <div
        style={{
          width: "100%",
          border: "0.5px solid",
          borderRadius: "4px",
          height: "9px",
          overflow: "hidden",
        }}
      >
        {percents.map((percent, i) => (
          <ProgressIncrement key={i} width={percent} />
        ))}
      </div>
    );
  };

  return (
    <Box className={props.classes.box} key={key}>
      <div>{clientId}</div>
      {renderQuote()}
    </Box>
  );
};

export default connect(null, {})(withStyles(styles)(ClientProgressIndicator));
