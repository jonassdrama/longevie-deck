const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();

app.use(basicAuth({
  users: { 'longevie': process.env.DECK_PASSWORD || 'longevie2026' },
  challenge: true,
  realm: 'Longevie'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Longevie deck on port ${PORT}`));
