import React, { useEffect } from "react";

function CustomeHook_2(count) {
  useEffect(() => {
    document.title = `count-${count}`;
  }, [count]);
}

export default CustomeHook_2