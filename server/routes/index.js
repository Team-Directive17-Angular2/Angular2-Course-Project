const express = require('express');
const path = require('path');

module.exports = function ({ app, controllers }) {
    const apiRouter = new express.Router();

    apiRouter.post('/authenticate', controllers.user.loginUser)
             .post('/register', controllers.user.registerUser);

    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};