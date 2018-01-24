const { Comments } = require('../models/comment');
const _ = require('lodash');

module.exports = (req, res) => {
    const body = _.pick(req.body, ['postId', 'comment', 'created_by']);
    const comment = new Comments(body);

    comment.save().then(()=> {
        res.send(comment);
    }).catch(e => {
        res.status(400).send(e);
    });
    
}