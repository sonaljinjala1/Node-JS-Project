const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const registerModel = require('../models/registermodel');

passport.use(new passportLocal({
    usernameField: 'email',
}, async (email, password, done) => {
    try {
        let user = await registerModel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log('email and password are not same');
            return done(null, false);
        }
        return done(null, user);
    } catch (error) {
        console.log(error);
        return false;
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await registerModel.findById(id);
        return done(null, user);
    } catch (error) {
        console.log(error);
        return false;
    }
})

passport.checkUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
}

passport.setuser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user
    }
    return next();
}

module.exports = passport;