const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const { USER_STATUS } = require('../../config/config');

const dbSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {

            },
            message: '{value} is not a valid email.'
        }
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    status: {
        type: String,
        default: USER_STATUS.PENDING
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

dbSchema.methods.toJSON = function () {
    const user = this;
    const userObj = user.toObject();

    return _.pick(userObj, ['_id', 'email', 'name', 'status']);
}

dbSchema.pre('save', function (next) {
    const user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }

});
dbSchema.methods.removeToken = function (token) {
    var user = this;

    return user.update({
        $pull: {
            tokens: { token }
        }
    });
};

dbSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, process.env.SECRET);
    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

dbSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = "auth";
    const token = jwt.sign({
        _id: user._id.toHexString(), access
    }, process.env.SECRET).toString();

    user.tokens.push({ access, token });

    return user.save().then(() => {
        return token;
    });
}

dbSchema.statics.findByCredentials = function (email, password) {
    var User = this;

    return User.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    });
};

const User = mongoose.model('User', dbSchema);

module.exports = { User }