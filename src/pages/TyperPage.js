import React from "react";
import Typer from "../components/typer/Typer";
import Socketio from "../components/socketio/Socketio";

class TyperPage extends React.Component {
  setRef = (ref) => {
    this.ref = ref;
  };

  setKeyboardFocus = (isFocus) => {
    if (isFocus) {
      this.ref.focus();
    } else {
      this.ref.removeAttribute("tabindex");
    }
  };

  handleClick = () => {
    this.ref.focus();
  };

  render() {
    return (
      <div onClick={this.handleClick} style={{ width: "100%" }}>
        <Typer setKeyboardFocus={this.setKeyboardFocus} setRef={this.setRef} />
        <Socketio />
      </div>
    );
  }
}

export default TyperPage;
