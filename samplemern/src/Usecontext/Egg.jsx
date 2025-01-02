import React, { useContext } from "react";
import Halfboil from "../Halfboil";
import { NameContext } from "./Hen";

function Egg() {
  const name = useContext(NameContext);

  return (
    <div>
      <h1>Egg: </h1>
      <Halfboil />
    </div>
  );
}

export default Egg;