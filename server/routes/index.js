const express = require('express');
const path = require('path');
const auth = require('../configurations/auth');

module.exports = function ({ app, controllers }) {
    const apiRouter = new express.Router();

    apiRouter.post('/authenticate', controllers.user.loginUser)
             .post('/register', controllers.user.registerUser)
             .post('/contact', controllers.contact.send)
             .get('/user/:username', controllers.user.getUserByName)


    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};