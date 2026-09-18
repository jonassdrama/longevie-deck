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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Longevie deck on port ${PORT}`));
