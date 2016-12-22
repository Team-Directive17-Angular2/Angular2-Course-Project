const express = require('express');
const path = require('path');
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");

module.exports = function ({ app }) {

    app.use(express.static(path.join(__dirname, '/../../dist/')));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(session({
        secret: "42noissesterces",
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
        if (req.user) {
            res.locals.currentUser = req.user;
        }

        next();
    });
};