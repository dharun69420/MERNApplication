import React, { useContext } from "react";
import { NameContext } from "./Hen";
import Stomach from "../Stomach";

function Halfboil() {
  const name = useContext(NameContext);

  return (
    <div>
      <h1>Halfboil :{name}</h1>
      <Stomach/>
    </div>
  );
}

export default Halfboil;