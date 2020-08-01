const {Strategy: LocalStrategy} = require('passport-local');

const bcrypt = require('bcrypt');
const models = require('./models');

// Compare the hash value of the passwords
const validPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}

module.exports = function(passport) {
    // Provide passport to the user object
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // Get user from the database
    passport.deserializeUser((id, done) => {
        models.User.findOne({
            where: {
                'id': id
            }
        }).then(user => {
            if (user) {
                done(null, user);
            }
            done(new Error('Wrong user id.'));
        });
    });
    // Define LocalStrategy to tell passportjs what fields to use for username and password
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }),
    function(req, email, password, done){
        return models.User.findOne({
            where: {
                'email': email
            }
        }).then(user => {
            // Authentication errors management
            if (user === null) {
                req.flash('message', 'Incorrect credentials.');
                return done(null, false);
            } else if (!user.password) {
                req.flash('message', 'You must reset your password.');
                return done(null, false);
            } else if (validPassword(user, password)) {
                req.flash('message', 'Invalid credentials');
                return done(null, false);
            }
            // Authentication success
            return done(null, user);
        }).catch(error => done(error, false));
    });
};