import React, { Component } from 'react';

class Example3 extends Component {
  state = {
    experiences: []
  };

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ experiences: data.Experiences }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {this.state.experiences.map((exp, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{exp.companyName}</h3>
            <img src={exp.logo} alt={`${exp.companyName} logo`} style={{ width: '100px' }} />
            <p><a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.url}</a></p>
            <div>
              {exp.roles.map((role, idx) => (
                <div key={idx}>
                  <h4>{role.title}</h4>
                  <p>{role.description}</p>
                  <small>{role.startDate} - {role.endDate}</small><br />
                  <small>{role.location}</small>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;