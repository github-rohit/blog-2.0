
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('./config/config');
const routes = require('./routes');
const {mongoose} = require('./db/mongoose');

const server = express();
const port = process.env.PORT;

server.use(express.static(path.join(__dirname, '../dist')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));

routes(server);

server.get('*', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

server.listen(port, () => {
    console.log('SERVER UP AND RUNNING AT PORT: ' + port);
});