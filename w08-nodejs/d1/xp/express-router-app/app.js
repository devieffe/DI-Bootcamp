const express = require('express');
const app = express();
const PORT = 3000;

// Import router module
const indexRouter = require('./routes/index');

// Mount the router
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});