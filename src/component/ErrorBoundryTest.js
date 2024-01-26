import React from 'react'

export default function ErrorBoundryTest({name}) {
    
  if(name==="jocker"){
    throw new Error("this is not a name")
  }else{
    return <div>{name}</div>
  }
}
