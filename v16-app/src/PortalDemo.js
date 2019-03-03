import React from 'react';
import ReactDOM from 'react-dom';

function PortalDemo(props) {
  return ReactDOM.createPortal(
    <div id="myModal" className="modal" style={{display: (props.show)? 'block' : 'none'}}>
      <div className="modal-content">
        <span className="close">&times;</span>
        {props.children}
      </div>
    </div>,
    props.domNode
  );
}

export default PortalDemo;