const jsonwebtoken = require('jsonwebtoken');

module.exports = function ({data, passport, config}) {

  const webTokenSecret = config.webToken;

  function registerUser(req, res) {
    const user = req.body;

    data.registerUser(user)
      .then(() => {
        res.status(201);
        return res.json("Successfully registered user.");
      })
      .catch((err) => {
        res.status(400);
        return res.json(err.message);
      });
  }

  function loginUser(req, res, next) {

    const webTokenObject = {
      username: req.body.username,
      password: req.body.password
    };

    passport.authenticate("local", (err, user) => {
      if (err) {
        return next(err);
      }
      if (user) {
        req.login(user, (err2) => {
          if (err2) {
            res.status(200);
            return res.json("Invalid username or password.");
          }

          res.status(200).json({
            username: req.body.username,
            auth_token: jsonwebtoken.sign(webTokenObject, webTokenSecret),
            role:user.role
          });
        });
      } else {
        res.status(200);
        return res.json("Invalid username or password.");
      }

    })(req, res, next);
  }

  function follow(req, res) {
    const currentUsername = req.body.currentUsername;
    const username = req.body.username;
    let currentFollower;
    let currentFollowing;

    data.getUserByName(currentUsername)
        .then((follower) => {
            currentFollower = follower;

            return data.getUserByName(username);
        })
        .then((following) => {
            currentFollowing = following;

            currentFollowing.followers.push({ _id: currentFollower._id,
                username: currentFollower.username,
                avatar: currentFollower.avatar });

            return data.updateFollowers(currentFollowing);
        })
        .then(() => {

            currentFollower.followings.push({ _id: currentFollowing._id,
                username: currentFollowing.username,
                avatar: currentFollowing.avatar });

            return data.updateFollowings(currentFollower);
        })
        .then(() => {
          res.status(201);
          return res.json("Successfully followed the person.");
        })
        .catch((err) => {
          res.status(400);
          return res.json(err.message);
        });
  }

  function unfollow(req, res) {

  }
  function getUserByName(req, res) {
    data.getUserByName(req.params.username)
      .then((user) => {

        let foundUser = {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: user.avatar,
          followers: user.followers,
          followings: user.followings,
          favoriteArtists: user.favoriteArtists,
          favoriteAlbums: user.favoriteAlbums,
          favoriteSongs: user.favoriteSongs
        }
        
        res.status(200).json({data: foundUser})
      })
      .catch((err) => {

        res.status(404);
        return res.json(err.message);

      })
  }

  function getUsers(req, res) {
    data.getUsers()
      .then((users) => {

        res.status(200).json({data: users})
      })
      .catch((err) => {

        res.status(404);
        return res.json(err.message);

      })
  }
  return {
    name: "user",
    registerUser,
    loginUser,
    follow,
    unfollow,
    getUserByName,
    getUsers
  };
};
