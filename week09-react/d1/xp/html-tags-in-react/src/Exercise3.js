import React, { Component } from 'react';
import './Exercise3.css'; 

class Exercise extends Component {
  render() {
    const style_header = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial'
    };

    return (
      <div>
        <h1 style={style_header}>Hello, World!</h1>
        <p className="para">This is a simple paragraph for demonstration purposes.</p>
        <a href="" target="_blank" rel="noopener noreferrer">
          Visit Example
        </a>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <img
          src="logo192.png"
          alt="Placeholder"
          style={{ display: 'block', margin: '10px auto', padding: '20px', backgroundColor: 'Navy', maxWidth: '400px'  }}
        />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
