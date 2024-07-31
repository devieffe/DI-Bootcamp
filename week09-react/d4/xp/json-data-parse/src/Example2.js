import React, { Component } from 'react';

class Example2 extends Component {
  state = {
    skills: []
  };

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ skills: data.Skills }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h2>Skills</h2>
        {this.state.skills.map((skillArea, index) => (
          <div key={index}>
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, idx) => (
                <li key={idx} style={{ color: skill.Hot ? 'red' : 'black' }}>
                  {skill.Name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;