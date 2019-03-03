import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FragmentDemo from './FragmentDemo';
import StringDemo from './StringDemo';
import ArrayDemo from './StringDemo';
import PortalDemo from './PortalDemo';
import HookDemo from './HookDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What's new in React 16</h1>
        <h2>Fragments</h2>
        <table border="1">
          <tr>
              <FragmentDemo/>
          </tr>
          <tr>
              <FragmentDemo/>
          </tr>
        </table>
        <hr/>
        <h2>Rendering Strings</h2>
        <StringDemo/>
        <hr/>
        <h2>Rendering Array</h2>
        <ArrayDemo/>
        <hr/>
        <h2>Portal</h2>
        <PortalDemo domNode={document.getElementById('portal-dom-node')}
          show={false}>
          <p>This text will not appear under h2 Portal but in the div with id portal-dom-node</p>
          <p>The children will act as if they were rendered in PortalDemo though.</p>
        </PortalDemo>
        <hr/>
        <h2>Hooks</h2>
        <HookDemo/>
        <hr/>
      </div>
    );
  }
}

export default App;
