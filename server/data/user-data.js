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

  function updateUserProfilePicture(user, filename) {
    return new Promise((resolve, reject) => {
        User.update({ _id: user._id }, { avatar: filename }, null, (err) => {
            if (err) {
                return reject(err);
            }

            return resolve();
        });
    });
  }

  function updateUserInformation(user, params) {
    const changes = {};

    for (let param in params) {
        if (params[param] !== user[param]) {
            changes[param] = params[param];
        }
    }

    return new Promise((resolve, reject) => {
        User.update({ _id: user._id }, changes, null, (err) => {
            if (err) {
                return reject(err);
            }

            return resolve();
        });
    });
  }

  function updateUserPassword(user, oldPassword, requestPassword) {
    return new Promise((resolve, reject) => {
        const requestedOldPassword = encryption.generateHashedPassword(user.salt, oldPassword);

        if (user.hashedPassword !== requestedOldPassword) {
            return reject("Incorrect old password. Please try again");
        }

        const hashedNewPassword = encryption.generateHashedPassword(user.salt, requestPassword);

        User.update({ _id: user._id }, { hashedPassword: hashedNewPassword }, null, (err) => {
            if (err) {
                return reject(err);
            }

            return resolve();
        });
    });
  }

  function updateUserRole(user) {
    return new Promise((resolve, reject) => {
        User.update({ _id: user._id }, { role: user.role }, null, (err) => {
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

  function getUserByEmail(email) {
      return new Promise((resolve, reject) => {
        User.findOne({email: email})
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
    getUserByEmail,
    getUsers,
    registerUser,
    updateFollowers,
    updateFollowings,
    updateUserProfilePicture,
    updateUserInformation,
    updateUserPassword,
    updateUserRole
  };
};
