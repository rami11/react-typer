import React from "react";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import Key from "./Key";

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

const Keyboard = ({ keyCode }) => {
  const classes = useStyles(keyCode);
  return (
    <div className={classes.keyboard}>
      {/*First Row*/}
      <div>
        <Key keyCode={192} className={classes.btn} char1="~" char2="`" />
        <Key keyCode={49} className={classes.btn} char1="!" char2="1" />
        <Key keyCode={50} className={classes.btn} char1="@" char2="2" />
        <Key keyCode={51} className={classes.btn} char1="#" char2="3" />
        <Key keyCode={52} className={classes.btn} char1="$" char2="4" />
        <Key keyCode={53} className={classes.btn} char1="%" char2="5" />
        <Key keyCode={54} className={classes.btn} char1="^" char2="6" />
        <Key keyCode={55} className={classes.btn} char1="&" char2="7" />
        <Key keyCode={56} className={classes.btn} char1="*" char2="8" />
        <Key keyCode={57} className={classes.btn} char1="(" char2="9" />
        <Key keyCode={48} className={classes.btn} char1=")" char2="0" />
        <Key keyCode={189} className={classes.btn} char1="_" char2="-" />
        <Key keyCode={187} className={classes.btn} char1="+" char2="=" />
        <Key
          keyCode={8}
          className={classes.btnTab}
          char1="Delete"
          char2={"\u00a0"}
        />
      </div>

      {/*Second Row*/}
      <div>
        <Key
          keyCode={9}
          className={classes.btnTab}
          char1="Tab"
          char2={"\u00a0"}
        />
        <Key keyCode={81} className={classes.btn} char1="Q" char2={"\u00a0"} />
        <Key keyCode={87} className={classes.btn} char1="W" char2={"\u00a0"} />
        <Key keyCode={69} className={classes.btn} char1="E" char2={"\u00a0"} />
        <Key keyCode={82} className={classes.btn} char1="R" char2={"\u00a0"} />
        <Key keyCode={84} className={classes.btn} char1="T" char2={"\u00a0"} />
        <Key keyCode={89} className={classes.btn} char1="Y" char2={"\u00a0"} />
        <Key keyCode={85} className={classes.btn} char1="U" char2={"\u00a0"} />
        <Key keyCode={73} className={classes.btn} char1="I" char2={"\u00a0"} />
        <Key keyCode={79} className={classes.btn} char1="O" char2={"\u00a0"} />
        <Key keyCode={80} className={classes.btn} char1="P" char2={"\u00a0"} />
        <Key keyCode={219} className={classes.btn} char1="{" char2="[" />
        <Key keyCode={221} className={classes.btn} char1="}" char2="]" />
        <Key keyCode={220} className={classes.btn} char1="|" char2="\" />
      </div>

      {/*Third Row*/}
      <div>
        <Key
          keyCode={20}
          className={classes.btnEnter}
          char1="Caps Lock"
          char2={"\u00a0"}
        />
        <Key keyCode={65} className={classes.btn} char1="A" char2={"\u00a0"} />
        <Key keyCode={83} className={classes.btn} char1="S" char2={"\u00a0"} />
        <Key keyCode={68} className={classes.btn} char1="D" char2={"\u00a0"} />
        <Key keyCode={70} className={classes.btn} char1="F" char2={"\u00a0"} />
        <Key keyCode={71} className={classes.btn} char1="G" char2={"\u00a0"} />
        <Key keyCode={72} className={classes.btn} char1="H" char2={"\u00a0"} />
        <Key keyCode={74} className={classes.btn} char1="J" char2={"\u00a0"} />
        <Key keyCode={75} className={classes.btn} char1="K" char2={"\u00a0"} />
        <Key keyCode={76} className={classes.btn} char1="L" char2={"\u00a0"} />
        <Key keyCode={186} className={classes.btn} char1=":" char2=";" />
        <Key keyCode={222} className={classes.btn} char1={'"'} char2="'" />
        <Key
          keyCode={13}
          className={classes.btnEnter}
          char1="Enter"
          char2={"\u00a0"}
        />
      </div>

      {/*Fourth Row*/}
      <div>
        <Key
          keyCode={16}
          className={classes.btnShift}
          char1="Shift"
          char2={"\u00a0"}
        />
        <Key keyCode={90} className={classes.btn} char1="Z" char2={"\u00a0"} />
        <Key keyCode={88} className={classes.btn} char1="X" char2={"\u00a0"} />
        <Key keyCode={67} className={classes.btn} char1="C" char2={"\u00a0"} />
        <Key keyCode={86} className={classes.btn} char1="V" char2={"\u00a0"} />
        <Key keyCode={66} className={classes.btn} char1="B" char2={"\u00a0"} />
        <Key keyCode={78} className={classes.btn} char1="N" char2={"\u00a0"} />
        <Key keyCode={77} className={classes.btn} char1="M" char2={"\u00a0"} />
        <Key keyCode={188} className={classes.btn} char1="<" char2="," />
        <Key keyCode={190} className={classes.btn} char1=">" char2="." />
        <Key keyCode={191} className={classes.btn} char1="?" char2="/" />
        <Key
          keyCode={16}
          className={classes.btnShift}
          char1="Shift"
          char2={"\u00a0"}
        />
      </div>

      {/*Fifth Row*/}
      <div>
        <Key
          keyCode={16}
          className={classes.btnCtl}
          char1="Ctl"
          char2={"\u00a0"}
        />
        <Key
          keyCode={90}
          className={classes.btnCtl}
          char1="Alt"
          char2={"\u00a0"}
        />
        <Key
          keyCode={88}
          className={classes.btnSpace}
          char1={"\u00a0"}
          char2={"\u00a0"}
        />
        <Key
          keyCode={67}
          className={classes.btnCtl}
          char1="Alt"
          char2={"\u00a0"}
        />
        <Key
          keyCode={86}
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
    keyCode: state.typer.keyCode,
  };
};

export default connect(mapStateToProps)(Keyboard);
