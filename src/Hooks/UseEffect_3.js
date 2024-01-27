import React, { useEffect, useState } from "react";

export default function UseEffect_2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mousePosition=(e)=>{
    setX(e.clientX)
    setY(e.clientY);
  }
  useEffect(()=>{
    console.log("ese Effect")
    window.addEventListener("mousemove",mousePosition)
  },[])

  return (
    <div>
      <h3>x position:{x}</h3>
      <h3>y position:{y}</h3>
    </div>
  );
}
