import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

const BoundaryHOC = ProtectedComponent => 
  class Boundary extends Component {
    state = {
      hasError: false
    };

    componentDidCatch = () => {
      this.setState({hasError: true});
    };
    render() {
      const { hasError } = this.state;
      if(hasError){
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  }

 
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

const PErrorMaker = BoundaryHOC(ErrorMaker)

class Portals extends Component {
  render() {
    return createPortal(
      <Message />,
      document.getElementById('touch-me')
    )
  }
}

const PPortals = BoundaryHOC(Portals)

const Message = () => "Hi It's me. Mario!";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

const ErrorFallback = () => "Sorry It's Error!"

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <PPortals />
        <PErrorMaker /> 
      </Fragment>
    );
  }
}

export default BoundaryHOC(App);
