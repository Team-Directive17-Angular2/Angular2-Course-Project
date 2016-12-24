module.exports = function( { data, passport }) {

    function registerUser(req, res) {
        const user = req.body;

        data.registerUser(user)
            .then(() => {
                res.status(201);
                return res.json("Successfully registered user");
            })
            .catch((err) => {
                res.status(400);
                return res.json(err.message);
            });
    }

    function loginUser(req, res, next) {
        passport.authenticate("local", (err, user) => {
            if (err) {
                return next(err);
            }
            if (user) {
                req.login(user, (err2) => {
                    if (err2) {
                        res.status(200);
                        return res.json(`{"error": "${constants.errorMessages.user}"}`);
                    }

                    res.status(200);
                    return res.json(`{"success": "${constants.successfulMessages.user.login} Welcome ${user.username}"}`);
                });
            } else {
                res.status(200);
                return res.json(`{"error": "${constants.errorMessages.user}"}`);
            }

        })(req, res, next);
    }

    return {
        name: "user",
        registerUser,
        loginUser
    };
};