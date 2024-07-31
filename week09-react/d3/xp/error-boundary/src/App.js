import React from 'react';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <h1>Simulation 1: Two BuggyCounters with one ErrorBoundary</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 2: Each BuggyCounter with its own ErrorBoundary</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 3: One BuggyCounter without ErrorBoundary</h1>
      <BuggyCounter />
    </div>
  );
}

export default App;
