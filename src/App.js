import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(
      <Message />,
      document.getElementById('touch-me')
    )
  }
}

const Message = () => "Hi It's me. Mario!";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <Portals />
      </Fragment>
    );
  }
}

export default App;
