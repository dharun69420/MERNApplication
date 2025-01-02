import { useState } from "react"
export const ColorContext = createContext(color);

function Y()
{
    let [color,setColor] = useState({color:"black",backgroundColor:"white"});
    const handleClick = () => {setColor({color:"red",backgroundColor:"black"})};


    

    return(
        <ColorContext.Provider value={color}>
            <div>
                <button onClick={handleClick}>Click me</button>
              <Z/>
            </div>
        </ColorContext.Provider>
    )
}
export default Y;