import React from 'react';

function Counter1({ name }) {
  console.log("MemoizedCounter1 render");
  return <div>{name}</div>;
}

export default React.memo(Counter1);