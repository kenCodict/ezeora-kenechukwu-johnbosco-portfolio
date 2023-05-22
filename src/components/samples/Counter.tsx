import React, { useState } from 'react'

type SimpleCounterProp = {
  setValue: React.Dispatch<React.SetStateAction<number>>,
  value:number,
}
const Counter = ({setValue, value}: SimpleCounterProp) => {
  
  return (
    <div>
      <h1>Count is {value}</h1>
      <button className="p-4 bg-gray-500 mx-4 rounded-full" onClick={() => setValue(prev => prev + 1)}>+</button>
      <button className="p-4 bg-gray-500 mx-4 rounded-full" onClick={() => setValue(0)}>Reset</button>
      <button className="p-4 bg-gray-500 mx-4 rounded-full" onClick={() => setValue(prev => prev - 1)}>+</button>
    </div>
  )
}

export default Counter