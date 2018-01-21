const express = require('express');
const core = require('./core/routes/routes');
const post = require('./post/routes/routes');
const category = require('./category/routes/routes');
const user = require('./user/routes/routes');


module.exports = (server) => {
    const router = express.Router();

    core(router);
    post(router);
    category(router);
    user(router);

    server.use('/api', router);
}