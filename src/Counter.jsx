import React, { useState } from 'react';
import MemoizedCounter1 from './Counter1';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('siva');

  function increment() {
    setCounter(counter + 1);
  }

  console.log("first render");

  return (
    <div className='text-center m-5'>
      <h1>{counter}</h1>
      <div>
        <button onClick={increment} className='btn btn-warning m-2'>Increment</button>
        <MemoizedCounter1 name={name} />
      </div>
    </div>
  );
}

export default Counter;