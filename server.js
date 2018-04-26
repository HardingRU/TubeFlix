const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to TubeFlix!');
});

app.use('*', (req, res) => {
    res.send("Route not found");
});
