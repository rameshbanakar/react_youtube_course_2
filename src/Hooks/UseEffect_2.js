import React, { useEffect, useState } from "react";

export default function UseEffect_2() {
  const [count, setCount] = useState(0);
  const [name,setName]=useState('')
  useEffect(() => {
    console.log("useEffect rendered");
  },[count]);

  return (
    <div>
    <input type="text" onChange={(e)=>setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
