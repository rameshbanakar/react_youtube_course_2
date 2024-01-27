import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useEffect rendered")
    })

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}
