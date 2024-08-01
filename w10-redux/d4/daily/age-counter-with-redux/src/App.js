import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AgeCounter from './components/ageCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AgeCounter />
      </div>
    </Provider>
  );
}

export default App;