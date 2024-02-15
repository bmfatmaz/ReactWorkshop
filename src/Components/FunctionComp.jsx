import React, { useState } from 'react';
export default function FunctionComp (props){
    const [state1,setState]=useState(0);
   return(
    <>
    <h1>Hello from function {props.test}  </h1>
    <p>the value of the state {state1}</p>
    </> 
   )
  
}