const encryption = require("../utils/encryption");

module.exports = function (models) {
  let {User} = models;

  function createNewUser(body) {
    return new Promise((resolve, reject) => {
      const salt = encryption.generateSalt();
      const hashedPassword = encryption.generateHashedPassword(salt, body.password);

      User.create({
        username: body.username,
        hashedPassword,
        salt,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
      })
        .then(() => {
          return resolve();
        })
        .catch(err => {
          return reject(err);
        });
    });
  }

  function registerUser(body) {
    return new Promise((resolve, reject) => {
      User.findOne({
        $or: [
          {username: body.username},
          {email: body.email}
        ]
      })
        .then(user => {
          if (user) {
            return reject(new Error("A user with this username or email already exists."));
          }

          return createNewUser(body);
        })
        .then(() => {
          return resolve();
        })
        .catch(err => {
          return reject(err);
        });
    });
  }

  function updateFollowers(user) {
    return new Promise((resolve, reject) => {
        User.update({ _id: user._id }, { followers: user.followers }, null, (err) => {
              if (err) {
                  return reject(err);
              }

              return resolve();
          });
    });
  }

  function updateFollowings(user) {
    return new Promise((resolve, reject) => {
        User.update({ _id: user._id }, { followings: user.followings }, null, (err) => {
              if (err) {
                  return reject(err);
              }

              return resolve();
          });
    });
  }

  function getUserByName(name) {
    return new Promise((resolve, reject) => {
      User.findOne({username: name})
        .then(user => {
          if (!user) {
            return reject(new Error("There is no such User"));
          }

          return resolve(user);
        });
    });
  }

  function getUsers() {
      return new Promise((resolve, reject) => {
        User.find({}, '_id username firstName lastName avatar')
          .then(users => {

            return resolve(users);
          });
      });
  }

  return {
    getUserByName,
    getUsers,
    registerUser,
    updateFollowers,
    updateFollowings
  };
};
