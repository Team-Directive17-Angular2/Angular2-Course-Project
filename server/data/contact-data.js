module.exports = function (models) {
  let {Message} = models;

  function sendContact(body) {
    console.log(body);

    return new Promise((resolve, reject) => {

      Message.create({
        name: body.name,
        email: body.email,
        title: body.title,
        content: body.content
      })
        .then(() => {
          return resolve();
        })
        .catch(err => {
          return reject(err);
        });
    });
  }

  return {
    sendContact
  };
};
