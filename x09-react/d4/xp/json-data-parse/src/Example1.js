import React, { Component } from 'react';

class Example1 extends Component {
  state = {
    socialMedias: []
  };

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ socialMedias: data.SocialMedias }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h2>Social Media Links</h2>
        <ul>
          {this.state.socialMedias.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;