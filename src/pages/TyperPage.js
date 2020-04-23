import React from "react";
import Typer from "../components/typer/Typer";

class TyperPage extends React.Component {
  setRef = (ref) => {
    this.ref = ref;
  };

  setKeyboardFocus = (isFocus) => {
    console.log(isFocus);
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
      <div
        onClick={this.handleClick}
        style={{ width: "100%", height: "100%", border: "1px solid" }}
      >
        <Typer setKeyboardFocus={this.setKeyboardFocus} setRef={this.setRef} />
      </div>
    );
  }
}

export default TyperPage;
