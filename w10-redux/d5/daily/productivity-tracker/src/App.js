import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CategorySelector from './components/CategorySelector';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CategorySelector />
      </div>
    </Provider>
  );
}

export default App;