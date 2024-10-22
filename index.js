const express = require('express');

const app = express();
const path = require('path');
const { limiter } = require('./middleware');

app.use(express.static(path.join(__dirname, 'public')));

app.use(limiter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.send('Route not found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on Port:${port}`);
});
