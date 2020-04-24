import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { nextChar, setKeyCode } from "../../redux/actions/typerActions";
import { connect } from "react-redux";
import Key from "./Key";

const Keyboard = (props) => {
  const btnStyle = {
    display: "inline-block",
    width: "30px",
    backgroundColor: "white",
    borderRadius: 2,
    fontSize: ".7em",
    padding: "0 6px",
    margin: 2,
    border: "1px solid grey",
    textAlign: "left",
    fontWeight: "bold",
  };

  const useStyles = createUseStyles({
    keyboard: {
      textAlign: "center",
      backgroundColor: "#f5f5f5",
      width: "522px",
      border: "1px solid grey",
      borderRadius: "2px",
      padding: "4px",
      margin: "auto",
    },
    btn: btnStyle,
    btnTab: { ...btnStyle, width: "60px" },
    btnEnter: { ...btnStyle, width: "63px" },
    btnShift: { ...btnStyle, width: "80px" },
    btnCtl: { ...btnStyle, width: "35px" },
    btnSpace: { ...btnStyle, width: "150px" },
  });

  useEffect(() => {
    props.setFocus(!props.isTextEndReached);
  });

  const handleKeyPress = (e) => {
    props.nextChar(e.key);
  };

  const handleKeyUp = (e) => {
    props.setKeyCode(null);
  };

  const handleKeyDown = (e) => {
    const { code } = e.nativeEvent;
    props.setKeyCode(code);
  };

  const classes = useStyles();

  return (
    <div
      ref={props.setRef}
      tabIndex={0}
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      className={classes.keyboard}
    >
      {/*First Row*/}
      <div>
        <Key code="Backquote" className={classes.btn} char1="~" char2="`" />
        <Key code="Digit1" className={classes.btn} char1="!" char2="1" />
        <Key code="Digit2" className={classes.btn} char1="@" char2="2" />
        <Key code="Digit3" className={classes.btn} char1="#" char2="3" />
        <Key code="Digit4" className={classes.btn} char1="$" char2="4" />
        <Key code="Digit5" className={classes.btn} char1="%" char2="5" />
        <Key code="Digit6" className={classes.btn} char1="^" char2="6" />
        <Key code="Digit7" className={classes.btn} char1="&" char2="7" />
        <Key code="Digit8" className={classes.btn} char1="*" char2="8" />
        <Key code="Digit9" className={classes.btn} char1="(" char2="9" />
        <Key code="Digit0" className={classes.btn} char1=")" char2="0" />
        <Key code="Minus" className={classes.btn} char1="_" char2="-" />
        <Key code="Equal" className={classes.btn} char1="+" char2="=" />
        <Key
          code="Backspace"
          className={classes.btnTab}
          char1="Delete"
          char2={"\u00a0"}
        />
      </div>

      {/*Second Row*/}
      <div>
        <Key
          code="Tab"
          className={classes.btnTab}
          char1="Tab"
          char2={"\u00a0"}
        />
        <Key code="KeyQ" className={classes.btn} char1="Q" char2={"\u00a0"} />
        <Key code="KeyW" className={classes.btn} char1="W" char2={"\u00a0"} />
        <Key code="KeyE" className={classes.btn} char1="E" char2={"\u00a0"} />
        <Key code="KeyR" className={classes.btn} char1="R" char2={"\u00a0"} />
        <Key code="KeyT" className={classes.btn} char1="T" char2={"\u00a0"} />
        <Key code="KeyY" className={classes.btn} char1="Y" char2={"\u00a0"} />
        <Key code="KeyU" className={classes.btn} char1="U" char2={"\u00a0"} />
        <Key code="KeyI" className={classes.btn} char1="I" char2={"\u00a0"} />
        <Key code="KeyO" className={classes.btn} char1="O" char2={"\u00a0"} />
        <Key code="KeyP" className={classes.btn} char1="P" char2={"\u00a0"} />
        <Key code="BracketLeft" className={classes.btn} char1="{" char2="[" />
        <Key code="BracketRight" className={classes.btn} char1="}" char2="]" />
        <Key code="Backslash" className={classes.btn} char1="|" char2="\" />
      </div>

      {/*Third Row*/}
      <div>
        <Key
          code="CapsLock"
          className={classes.btnEnter}
          char1="Caps Lock"
          char2={"\u00a0"}
        />
        <Key code="KeyA" className={classes.btn} char1="A" char2={"\u00a0"} />
        <Key code="KeyS" className={classes.btn} char1="S" char2={"\u00a0"} />
        <Key code="KeyD" className={classes.btn} char1="D" char2={"\u00a0"} />
        <Key code="KeyF" className={classes.btn} char1="F" char2={"\u00a0"} />
        <Key code="KeyG" className={classes.btn} char1="G" char2={"\u00a0"} />
        <Key code="KeyH" className={classes.btn} char1="H" char2={"\u00a0"} />
        <Key code="KeyJ" className={classes.btn} char1="J" char2={"\u00a0"} />
        <Key code="KeyK" className={classes.btn} char1="K" char2={"\u00a0"} />
        <Key code="KeyL" className={classes.btn} char1="L" char2={"\u00a0"} />
        <Key code="Semicolon" className={classes.btn} char1=":" char2=";" />
        <Key code="Quote" className={classes.btn} char1={'"'} char2="'" />
        <Key
          code="Enter"
          className={classes.btnEnter}
          char1="Enter"
          char2={"\u00a0"}
        />
      </div>

      {/*Fourth Row*/}
      <div>
        <Key
          code="ShiftLeft"
          className={classes.btnShift}
          char1="Shift"
          char2={"\u00a0"}
        />
        <Key code="KeyZ" className={classes.btn} char1="Z" char2={"\u00a0"} />
        <Key code="KeyX" className={classes.btn} char1="X" char2={"\u00a0"} />
        <Key code="KeyC" className={classes.btn} char1="C" char2={"\u00a0"} />
        <Key code="KeyV" className={classes.btn} char1="V" char2={"\u00a0"} />
        <Key code="KeyB" className={classes.btn} char1="B" char2={"\u00a0"} />
        <Key code="KeyN" className={classes.btn} char1="N" char2={"\u00a0"} />
        <Key code="KeyM" className={classes.btn} char1="M" char2={"\u00a0"} />
        <Key code="Comma" className={classes.btn} char1="<" char2="," />
        <Key code="Period" className={classes.btn} char1=">" char2="." />
        <Key code="Slash" className={classes.btn} char1="?" char2="/" />
        <Key
          code="ShiftRight"
          className={classes.btnShift}
          char1="Shift"
          char2={"\u00a0"}
        />
      </div>

      {/*Fifth Row*/}
      <div>
        <Key
          code="ControlLeft"
          className={classes.btnCtl}
          char1="Ctl"
          char2={"\u00a0"}
        />
        <Key
          code="AltLeft"
          className={classes.btnCtl}
          char1="Alt"
          char2={"\u00a0"}
        />
        <Key
          code="Space"
          className={classes.btnSpace}
          char1={"\u00a0"}
          char2={"\u00a0"}
        />
        <Key
          code="AltRight"
          className={classes.btnCtl}
          char1="Alt"
          char2={"\u00a0"}
        />
        <Key
          code="ControlRight"
          className={classes.btnCtl}
          char1="Ctl"
          char2={"\u00a0"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isTextEndReached: state.typer.isTextEndReached,
  };
};

export default connect(mapStateToProps, { nextChar, setKeyCode })(Keyboard);
