import React, { useState } from "react";

import UseEffect_4 from './UseEffect_4'

export default function CleanUp() {
    const [display,setDisplay]=useState(true)
    const HideAndShow=()=>{
        if (display){
            setDisplay(false);
        }else{
           setDisplay(true);
        }
        
    }
  return (
    <div>
        <button onClick={HideAndShow}>click me</button>
        {display&& <UseEffect_4/>}
    </div>
  )
}
