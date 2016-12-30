const express = require('express');
const path = require('path');
const auth = require('../configurations/auth');
const adminRole = 'Admin';

module.exports = function ({ app, controllers }) {
    const apiRouter = new express.Router();

    apiRouter.post('/authenticate', controllers.user.loginUser)
             .post('/register', controllers.user.registerUser)
             .post('/contact', controllers.contact.send)
             .get('/users', controllers.user.getUsers)
             .get('/user/:username', controllers.user.getUserByName)
             .put('/follow', auth.isAuthenticated(), controllers.user.follow)
             .put('/profile/profile-picture', auth.isAuthenticated(),  controllers.user.uploadProfilePicture)
             .put('/profile/profile-information', auth.isAuthenticated(),  controllers.user.updateInformation)
             .put('/profile/password', controllers.user.updatePassword)
             .post('/artist', auth.isInRole(adminRole), controllers.artist.addArtist)
             .post('/album', auth.isInRole(adminRole), controllers.album.addAlbum)
             .post('/song', auth.isInRole(adminRole), controllers.song.addSong)


    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};