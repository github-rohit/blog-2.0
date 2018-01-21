const signup = require('../controllers/signup.controllers');
const login = require('../controllers/login.controllers');

module.exports = (router) => {
    router.route('/signup').post(signup);  
    router.route('/login').post(login);  

}