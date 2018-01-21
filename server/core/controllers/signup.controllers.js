
const { User } = require('../models/user');

module.exports = (req, res) => {
    const data = req.body;
    const user = new User({
        email: data.email,
        name: data.name,
        password: data.password
    });
    
    user.save(user).then(()=> {
        res.send(user);
    }).catch(e => {
        if (e.code === 11000) {
            res.status(400).send({Unique: true});
        } else {
            res.status(400).send(e);
        }
    });

}