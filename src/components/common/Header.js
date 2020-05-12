import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Translate from "@material-ui/icons/Translate";
import { withTranslation } from "react-i18next";
import { resetTyper } from "../../redux/actions/typerActions";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEnglishClick = (event) => {
    props.resetTyper();
    props.i18n.changeLanguage("en");
    setAnchorEl(false);
  };

  const handleFrenchClick = (event) => {
    props.resetTyper();
    props.i18n.changeLanguage("fr");
    setAnchorEl(false);
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Translate />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem key="en" onClick={handleEnglishClick}>
              English
            </MenuItem>
            <MenuItem key="fr" onClick={handleFrenchClick}>
              Français
            </MenuItem>
          </Menu>
        </div>
        {/* <GoogleAuth /> */}
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, { resetTyper })(withTranslation()(Header));
