const { Post } = require('../models/post');
const { POST_STATUS } = require('../../config/config');
const _ = require('lodash');

module.exports = (req, res) => {
    const body = _.pick(req.body, ['title', 'description', 'image', 'category', 'tags', 'created_by', 'status']);
    body.status = POST_STATUS[body.status];

    const post = new Post(body);

    post.save().then(()=> {
        res.send(post);
    }).catch(e => {
        res.status(400).send(e);
    });
    
}