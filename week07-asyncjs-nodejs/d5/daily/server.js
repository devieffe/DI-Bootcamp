const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
];

let score = 0;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateOptions(correctName) {
  const options = [correctName];
  while (options.length < 4) {
    const option = getRandomElement(emojis).name;
    if (!options.includes(option)) {
      options.push(option);
    }
  }
  return options.sort(() => Math.random() - 0.5); 
}


app.get('/', (req, res) => {
  const currentEmoji = getRandomElement(emojis);
  const options = generateOptions(currentEmoji.name);
  res.json({ emoji: currentEmoji.emoji, options });
});

app.post('/guess', (req, res) => {
  const { guess, correctName } = req.body;
  if (guess === correctName) {
    score++;
    res.json({ message: 'Correct!', score });
  } else {
    res.json({ message: 'Incorrect!', score });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
