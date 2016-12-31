const jsonwebtoken = require('jsonwebtoken');

module.exports = function ({data, passport, config, fs, path, imageDecoder}) {

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
    // if operation is true - follow; if operation is false - unfollow
    const operation = req.body.operation;
    let currentFollower;
    let currentFollowing;

    data.getUserByName(currentUsername)
        .then((follower) => {
            currentFollower = follower;

            return data.getUserByName(username);
        })
        .then((following) => {
            currentFollowing = following;

            if(operation) {
                currentFollowing.followers.push({ _id: currentFollower._id,
                    username: currentFollower.username,
                    avatar: currentFollower.avatar });
            } else {
                currentFollowing.followers = currentFollowing.followers.filter((f) => {
                    return f.username !== currentUsername;
                })
            }

            return data.updateFollowers(currentFollowing);
        })
        .then(() => {

            if(operation) {
            currentFollower.followings.push({ _id: currentFollowing._id,
                username: currentFollowing.username,
                avatar: currentFollowing.avatar });
            } else {
                currentFollower.followings = currentFollower.followings.filter((f) => {
                    return f.username !== username;
                })
            }

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

  function uploadProfilePicture(req, res) {
      const username = req.body.username;
      const imageData = req.body.data;

      let imageBuffer = imageDecoder.decode(imageData);
      let imageName = "profile-" + Date.now() + ".jpg";
      let imagePath = path.join(__dirname, "..", "..", "/src/assets/images/profile-pictures/", imageName)

      fs.writeFile(imagePath, imageBuffer.data, (err) => {
          if(err) {
              res.status(400);
              return res.json("Problem with saving the image. Please try again later.");
          } else {
              data.getUserByName(username)
                  .then((user) => {
                      return data.updateUserProfilePicture(user, imageName);
                  })
                  .then(() => {
                      res.status(201);
                      return res.json('Profile picture was successfully saved');
                  })
                  .catch((err) => {
                      res.status(400);
                      return res.json('Problem occured with saving the picture. Please try again later.');
                  });
          }
      });
  }

  function updateInformation(req, res) {
      let email = req.body.email;

      data.getUserByEmail(email)
          .then((user) => {
              if (user && user.username !== req.user.username) {
                  res.status(400);
                  return res.json("Username with this email already exists");
              }

              return data.getUserByName(req.user.username);
          })
          .then((user) => {
              return data.updateUserInformation(user, req.body);
          })
          .then(() => {
              res.status(201);
              return res.json("Successfully changed your personal information.");
          })
          .catch((err) => {
              res.status(400);
              return res.json("Problem occured while changing your information. Please try again later.");
          });
  }

  function updatePassword(req, res) {
      let oldPassword = req.body.oldPassword;
      let newPassword = req.body.newPassword;

      data.getUserByName(req.user.username)
          .then((user) => {
              return data.updateUserPassword(user, oldPassword, newPassword);
          })
          .then(() => {
              res.status(201);
              return res.json("Successfully changed your password");
          })
          .catch((err) => {
              res.status(400);
              return res.json(err);
          });
  }

  function updateUserRole(req, res) {
    const username = req.body.username;

    data.getUserByUsername(username)
        .then((user) => {
            user.role = "Admin";
            return data.updateUserRole(user);
        })
        .then(() => {
            res.status(201);
            return res.json('Successfully added to admins');
        })
        .catch((err) => {
            res.status(400);
            return res.json('Problem occured while adding to admin. Please try again later.');
        });
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
    uploadProfilePicture,
    updateInformation,
    updatePassword,
    updateUserRole,
    getUserByName,
    getUsers
  };
};
