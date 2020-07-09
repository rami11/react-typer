import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: -10,
  },
  footerLabel: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
};

const Footer = withStyles(styles)((props) => {
  const classes = props.classes;
  return (
    <div className={classes.footer}>
      <div className={classes.footerLabel}>
        Rami Serapian © {new Date().getFullYear()}
      </div>
    </div>
  );
});

export default Footer;
