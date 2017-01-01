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
             .get('/users/:username', controllers.user.getUserByName)
             .put('/follow', auth.isAuthenticated(), controllers.user.follow)
             .put('/role', auth.isInRole(adminRole), controllers.user.updateUserRole)
             .put('/demote', auth.isInRole(adminRole), controllers.user.demoteAdmin)
             .get('/messages', auth.isInRole(adminRole), controllers.contact.getMessages)
             .get('/messages/:id', auth.isInRole(adminRole), controllers.contact.getSpecificMessage)
             .put('/messages/:id', auth.isInRole(adminRole), controllers.contact.updateMessageStatus)
             .put('/profile/profile-picture', auth.isAuthenticated(),  controllers.user.uploadProfilePicture)
             .put('/profile/profile-information', auth.isAuthenticated(),  controllers.user.updateInformation)
             .put('/profile/password', controllers.user.updatePassword)
             .get('/artists', controllers.artist.getArtists)
             .get('/artists-names', controllers.artist.getArtistsNames)
             .get('/artists/:id', auth.isAuthenticated(), controllers.artist.getSpecificArtist)
             .put('/favorite-artist', auth.isAuthenticated(), controllers.user.updateFavoriteArtists)
             .post('/artist', auth.isInRole(adminRole), controllers.artist.addArtist)
             .get('/albums', controllers.album.getAlbums)
             .get('/albums/:id', auth.isAuthenticated(), controllers.album.getSpecificAlbum)
             .put('/favorite-album', auth.isAuthenticated(), controllers.user.updateFavoriteAlbums)
             .post('/album', auth.isInRole(adminRole), controllers.album.addAlbum)
             .get('/songs', controllers.song.getAllSongs)
             .get('/songs/:id', auth.isAuthenticated(), controllers.song.getSpecificSong)
             .put('/favorite-song', auth.isAuthenticated(), controllers.user.updateFavoriteSongs)
             .post('/song', auth.isInRole(adminRole), controllers.song.addSong)


    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};