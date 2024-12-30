import { useState } from "react";
import List from "./List";


function Dharun() {
  const [count, setCount] = useState(0);

  return (
    <div className='DIV'>


      {/*<button onClick={() => setCount(count + 1)}>++</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>--</button>*/}
        <List />
    </div>
  );
}

export default Dharun;