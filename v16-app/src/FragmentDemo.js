import React from 'react';
// <> and </> is shorthand for React.Fragment
// We can pass props like key too
function FragmentDemo() {
  return (
    <React.Fragment>
      <td>Hello</td>
      <td>World</td>
    </React.Fragment>
  );
}

export default FragmentDemo;