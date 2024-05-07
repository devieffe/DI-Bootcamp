import React from 'react';
import para from './Exercise.css';


const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };



class Exercise extends React.Component {
    render() {
        return (
            <>
        <h1 style={style_header}>Heading</h1>
        <p style={para}>Hello</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
        <form>
            <input type='text'/>
            <button>Ok</button>
        </form>
        </>
        )
    }
}

export default Exercise;