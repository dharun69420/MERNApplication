import React, { useContext } from "react";
import { Stylecontext } from "./Hen";

function Stomach() {
  const style = useContext(Stylecontext);

  return (
    <div style={{ backgroundColor: style.backgroundColor, color: style.color }}>
      <h1>Stomach </h1>
    </div>
  );
}

export default Stomach;