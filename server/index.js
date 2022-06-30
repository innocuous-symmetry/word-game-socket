const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', require('./routes/users'));
app.use('/words', require('./routes/words'));

module.exports = app;