import React from 'react';

function HOCDemo(props) {
  return (
    <div>
      <a href={props.href}>{props.text}</a>
    </div>
  );
}

export default HOCDemo;