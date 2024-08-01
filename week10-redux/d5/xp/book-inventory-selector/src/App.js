import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
