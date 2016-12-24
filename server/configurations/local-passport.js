const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function({ User }) {
    passport.use(new LocalStrategy((username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: "Incorrect username." });
            }
            if (!user.authenticate(password)) {
                return done(null, false, { message: "Incorrect password." });
            }

            return done(null, user);
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};