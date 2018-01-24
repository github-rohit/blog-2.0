const read = require('../controllers/comment-read.controllers');
const create = require('../controllers/comment-create.controllers');
const del = require('../controllers/comment-delete.controllers');

module.exports = (router) => {
    router.route('/comment/:postId').get(read);  
    router.route('/comment').post(create);  
    router.route('/comment/:id').delete(del); 
}