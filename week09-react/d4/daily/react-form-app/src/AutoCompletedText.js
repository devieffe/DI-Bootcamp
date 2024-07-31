import React, { Component } from 'react';
import countries from './countries';

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    };
  }

  handleChange = (event) => {
    const userInput = event.target.value;
    const filteredSuggestions = countries.filter(
      country =>
        country.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      suggestions: filteredSuggestions,
      text: userInput
    });
  };

  handleClick = (suggestion) => {
    this.setState({
      text: suggestion,
      suggestions: []
    });
  };

  render() {
    const { suggestions, text } = this.state;

    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => this.handleClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AutoCompletedText;