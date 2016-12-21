const express = require('express');
const path = require('path');

module.exports = function ({ app }) {
    const apiRouter = new express.Router();

    apiRouter.get('/', function (req, res) {
        res
            .status(200)
            .send('Api test');
    })

    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};