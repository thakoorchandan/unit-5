import React, { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

function Button(props) {
  let theme = useContext(AppContext);
  const style = { border: "2px solid black", borderRadius: "10px" };
  return (
    <>
      <div style={{ ...style, ...theme.appTheme }}>{props.label}</div>
      <button onClick={theme.setDark}>Dark</button>
      <button onClick={theme.setLight}>Light</button>
    </>
  );
}

export default Button;
