import React, { useContext } from 'react';
import { ColorContext } from './Y';
function Z()
{
    const color = useContext(ColorContext);
    return(
        <>
        <h1 style={{color:color.color}}>Name</h1>

        </>
    )
}
export default Z;