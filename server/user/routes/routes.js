const user = require('../controllers/user.controllers');
const update = require('../controllers/user-update.controllers');
const del = require('../controllers/user-delete.controllers');

module.exports = (router) => {
    router.route('/author/:id').get(user);  
    router.route('/author/:id').patch(update);    
    router.route('/author/:id').delete(del); 
}