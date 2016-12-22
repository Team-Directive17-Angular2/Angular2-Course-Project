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

    let testUser = { username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }

    app.post('/api/authenticate', (req, res) => {
        let params = req.body
        console.log(req.body);
        if(params.username == testUser.username && params.password == testUser.password){
            let token = 'fake-jwt-token';
            console.log(token);
            res.json({
                result:token
            });
        }
        else{
            res.send().status(200);
        }
    });

    app.post('/api/register', (req, res) => {
        let params = req.body;
        console.log(params);
        res.send().status(200);
    })
};