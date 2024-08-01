import React, { Component } from 'react';
import quotes from './quotes';

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: this.getRandomQuote(),
      backgroundColor: this.getRandomColor(),
      quoteColor: this.getRandomColor(),
      buttonColor: this.getRandomColor(),
    };
  }

  getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A2', '#33FFF7'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  handleNewQuote = () => {
    let newQuote;
    do {
      newQuote = this.getRandomQuote();
    } while (newQuote === this.state.currentQuote);

    this.setState({
      currentQuote: newQuote,
      backgroundColor: this.getRandomColor(),
      quoteColor: this.getRandomColor(),
      buttonColor: this.getRandomColor(),
    });
  };

  render() {
    const { currentQuote, backgroundColor, quoteColor, buttonColor } = this.state;

    return (
      <div style={{ backgroundColor, padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: quoteColor }}>{currentQuote.quote}</h1>
        <p style={{ color: quoteColor }}>— {currentQuote.author}</p>
        <button
          onClick={this.handleNewQuote}
          style={{ backgroundColor: buttonColor, color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default QuoteGenerator;