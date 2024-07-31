const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const { inputValue } = req.body;
  console.log('Received POST request with data:', inputValue);
  res.send(`I received your POST request. This is what you sent me: ${inputValue}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
