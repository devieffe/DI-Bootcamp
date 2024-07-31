import React from 'react';

function App() {
  const sendData = async () => {
    const url = 'https://webhook.site/0b26b994-7bf4-431b-b1b8-78c6f1f308b7'; 
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Webhook Test</h1>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}

export default App;