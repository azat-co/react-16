import React, { useState, useEffect } from 'react';

function HookDemo() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [monkey, updateMonkey] = useState(2);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>How many monkey I have in my zoo: {monkey}</p>
      <button onClick={() => {updateMonkey(monkey+1);setCount(count + 1)}}>
        Click me
      </button>
    </div>
  );
}


export default HookDemo;