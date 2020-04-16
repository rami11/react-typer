import React from "react";
import GoogleAuth from "./GoogleAuth";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <GoogleAuth />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
