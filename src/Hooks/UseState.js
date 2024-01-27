import React, { useState } from 'react'

export default function UseState() {
    const [count,setCount]=useState(0)
    const clicked=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={clicked}>clicked {count} times</button>
    </div>
  )
}
