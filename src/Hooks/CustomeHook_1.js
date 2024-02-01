import React,{useState,useEffect} from 'react'
import CustomeHook_2 from './CustomeHook_2';

function CustomeHook_1() {
  const [count, setCount] = useState(0);
  //while creating custome hook we have to start the fuction name 'use' word e.g-useCustomeHook_2
  CustomeHook_2(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

export default CustomeHook_1