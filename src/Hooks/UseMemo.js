import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [couterOne, setCouterOne] = useState(0);
  const [counterTwo, setCouterTwo] = useState(0);

  const incrementOne = () => {
    console.log("incrementOne");
    setCouterOne(couterOne + 1);
  };
  const incrementTwo = () => {
    console.log("incrementTwo");
    setCouterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    console.log("isEven");
    return couterOne % 2 === 0;
  }, [couterOne]);
  return (
    <div>
      <button onClick={incrementOne}>incrementOne {couterOne}</button>
      <span>{isEven?"Even":"Odd"}</span>
      <button onClick={incrementTwo}>incrementTwo {counterTwo}</button>
    </div>
  );
}
