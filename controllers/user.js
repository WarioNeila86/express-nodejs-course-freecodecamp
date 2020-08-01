const passport = require('passport');
const models = require('../models');
const bcrypt = require('bcrypt');
const myPassport = require('../passport-setup')(passport);
const flash = require('connect-flash');

exports.showLogin = function(req, res, next) {
    res.render('user/login', {formData: {}, errors: {}});
}

exports.showSignup = function(req, res, next) {
    res.render('user/signup', {formData: {}, errors: {}});
}

exports.login = function(req, res, next) {
    
}

const generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

exports.signup = function(req, res, next) {
    const newUser = models.User.build({
        email: req.body.email,
        password: generateHash(req.body.password)
    });
    return newUser.save().then(result => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signup',
            failureFlash: true
        })(req, res, next);
    });
}