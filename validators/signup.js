const validator = require('validator');
const models = require('../models');

const validateCreateUserFields = function(errors, req) {
    if (!validator.isEmail(req.body.email)) {
        errors['email'] = 'Please use a valid email';
    }
    if (!validator.isAscii(req.body.password)) {
        errors['password'] = 'Invalid characters in password, please try another';
    }
    if (!validator.isLength(req.body.password, {min: 4, max: 25})) {
        errors['password'] = 'Please ensure that your password has a minimum of 4 characters and no more than 25';
    };
}

exports.validateUser = function(errors, req) {
    return new Promise(function(resolve, reject) {
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                errors['email'] = 'Email already in use, please login or reset your password.';
            }
            resolve(errors);
        });
    });
}