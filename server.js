const express = require('express');

const server = express();

server.use(express.static(__dirname + '/dist'));

server.get('*', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/dist/index.html');
});

server.listen(3000, () => {
    console.log('SERVER UP AND RUNNING AT PORT: ' + 3000);
});