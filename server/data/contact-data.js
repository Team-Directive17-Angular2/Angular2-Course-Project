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

  function getMessages() {
    return new Promise((resolve, reject) => {
        Message.find((err, messages) => {
            if (err) {
                return reject(err);
            }

            return resolve(messages || null);
        });
    });
}

  function getSpecificMessage(id) {
    return new Promise((resolve, reject) => {
        Message.findOne({ _id: id }, (err, message) => {
            if (err) {
                return reject(err);
            }

            return resolve();
        });
    });
  }

  function updateMessageStatus(message) {
    return new Promise((resolve, reject) => {
        Message.update({ _id: message._id }, { processedBy: message.processedBy, status: message.status }, null, (err) => {
            if (err) {
                return reject(err);
            }

            return resolve();
        });
    });
  }

  return {
    sendContact,
    getMessages,
    getSpecificMessage,
    updateMessageStatus
  };
};
