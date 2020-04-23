import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">{/* <GoogleAuth /> */}</Toolbar>
    </AppBar>
  );
};

export default Header;
