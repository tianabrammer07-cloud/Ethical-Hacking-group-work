const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(session({
  secret: 'ctfhub-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/challenges', require('./routes/challenges'));
app.use('/scoreboard', require('./routes/scoreboard'));
app.use('/admin', require('./routes/admin'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('CTF Hub running at http://localhost:3000');
});
