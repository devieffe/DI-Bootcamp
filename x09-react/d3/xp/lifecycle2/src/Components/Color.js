import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('The Child component is about to be unmounted!');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return prevState.favoriteColor;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
    console.log('Previous color was:', snapshot);
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color to blue</button>
        <button onClick={this.toggleShow}>Delete</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

export default Color;