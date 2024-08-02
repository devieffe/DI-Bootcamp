const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/pages');

// Static Files
app.use(express.static('public'));

// Get RSS feed data
async function getFeed() {
  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  return feed;
}

// Home Route: Display all posts
app.get('/', async (req, res) => {
  try {
    const feed = await getFeed();
    res.render('index', { posts: feed.items });
  } catch (error) {
    res.status(500).send('Error fetching feed');
  }
});

// Search Route: Render search page
app.get('/search', (req, res) => {
  res.render('search', { posts: [] });
});

// Search by Title
app.post('/search/title', async (req, res) => {
  const title = req.body.title.toLowerCase();
  try {
    const feed = await getFeed();
    const filteredPosts = feed.items.filter(item => item.title.toLowerCase().includes(title));
    res.render('search', { posts: filteredPosts });
  } catch (error) {
    res.status(500).send('Error fetching feed');
  }
});

// Search by Category
app.post('/search/category', async (req, res) => {
  const category = req.body.category.toLowerCase();
  try {
    const feed = await getFeed();
    const filteredPosts = feed.items.filter(item => item.categories && item.categories.some(cat => cat.toLowerCase().includes(category)));
    res.render('search', { posts: filteredPosts });
  } catch (error) {
    res.status(500).send('Error fetching feed');
  }
});

app.listen(PORT, () => {
  console.log(`OK http://localhost:${PORT}`);
});
