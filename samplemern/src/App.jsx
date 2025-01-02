import React, { createContext } from "react";
import Hen from "./Usecontext/Hen";
import Y from "./Usecontext/Y";
let Stylecontext =createContext();
function App() {
  return (
    <div>
     {/* <Hen/> */}
     <Y/>
      
    </div>
  );
}

export default App;