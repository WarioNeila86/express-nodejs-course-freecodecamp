exports.showLogin = function(req, res, next) {
    res.render('user/login', {formData: {}, errors: {}});
}

exports.showSignup = function(req, res, next) {
    res.render('user/signup', {formData: {}, errors: {}});
}