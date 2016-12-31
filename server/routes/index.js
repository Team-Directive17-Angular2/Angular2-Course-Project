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
             .put('/role', auth.isInRole(adminRole), controllers.user.updateUserRole)
             .get('/messages', auth.isInRole(adminRole), controllers.contact.getMessages)
             .get('/messages/:id', auth.isInRole(adminRole), controllers.contact.getSpecificMessage)
             .put('/messages/:id', auth.isInRole(adminRole), controllers.contact.updateMessageStatus)
             .put('/profile/profile-picture', auth.isAuthenticated(),  controllers.user.uploadProfilePicture)
             .put('/profile/profile-information', auth.isAuthenticated(),  controllers.user.updateInformation)
             .put('/profile/password', controllers.user.updatePassword)
             .get('/artists', controllers.artist.getArtists)
             .get('/artists/:id', auth.isAuthenticated(), controllers.artist.getSpecificArtist)
             .post('/artist', auth.isInRole(adminRole), controllers.artist.addArtist)
             .get('/albums', controllers.album.getAlbums)
             .get('/albums/:id', auth.isAuthenticated(), controllers.album.getSpecificAlbum)
             .post('/album', auth.isInRole(adminRole), controllers.album.addAlbum)
             .post('/song', auth.isInRole(adminRole), controllers.song.addSong)
             .get('/song', auth.isAuthenticated(), controllers.song.getAllSongs)


    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};