import React, { createContext, useState } from "react";
import Stomach from "./Stomach";

let Stylecontext = createContext();

function Hen() {
  const [style, setStyle] = useState({ backgroundColor: "black", color: "white" });

  const handleClick = () => {
    setStyle({ backgroundColor: "yellow", color: "red" });
  };

  return (
    <Stylecontext.Provider value={style}>
      <div>
        <button onClick={handleClick}>Click me</button>
        <Stomach />
      </div>
    </Stylecontext.Provider>
  );
}

export default Hen;
export { Stylecontext };