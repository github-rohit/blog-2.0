const all = require('../controllers/post-all.controllers');
const single = require('../controllers/post-single.controllers');
const create = require('../controllers/post-create.controllers');
const update = require('../controllers/post-update.controllers');
const del = require('../controllers/post-delete.controllers');

module.exports = (router) => {
    router.route('/posts').get(all);  
    router.route('/posts/:id').get(single);   
    router.route('/posts').post(create);  
    router.route('/posts/:id').patch(update);    
    router.route('/posts/:id').delete(del); 
}