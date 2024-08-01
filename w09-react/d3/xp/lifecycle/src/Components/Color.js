// Color.js
import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
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

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color to blue</button>
      </div>
    );
  }
}

export default Color;
