const admin = require('../controllers/user-admin.controllers');
const update = require('../controllers/user-update.controllers');
const del = require('../controllers/user-delete.controllers');

module.exports = (router) => {
    router.route('/author/:id').get(admin);  
    router.route('/author/:id').patch(update);    
    router.route('/author/:id').delete(del); 
}