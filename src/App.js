import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

class ErrorMaker extends Component {
  state = {
    friends: ["동근", "인수", "정수", "유정", "슬비", "영화"]
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      })
    }, 2000);
  }
  
  render() {
    const { friends } = this.state;
    return friends.map((friends) => ` ${friends}`);
  }
}

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

const ErrorFallback = () => "Sorry It's Error!"

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch(error, info) {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({hasError: true});
  };
  render() {
    const { hasError } = this.state;
    return (
      <Fragment>
        <ReturnTypes />
        <Portals />
        {hasError ? <ErrorFallback /> : <ErrorMaker /> }
      </Fragment>
    );
  }
}

export default App;
