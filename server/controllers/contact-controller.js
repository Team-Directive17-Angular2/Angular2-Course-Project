module.exports = function ({data}) {

  function send(req, res) {
    const message = req.body;

    data.sendContact(message)
      .then(() => {
        res.status(201);
        return res.json("Successfully send message.");
      })
      .catch((err) => {
        res.status(400);
        return res.json(err.message);
      });
  }

  function getMessages(req, res) {
    data.getMessages()
      .then((messages) => {

        res.status(200).json({data: messages})
      })
      .catch((err) => {

        res.status(404);
        return res.json(err.message);

      })
  }

  function getSpecificMessage(req, res) {
    data.getSpecificMessage(req.params.id)
      .then((message) => {

        res.status(200);
        return res.json({data: message})
      })
      .catch((err) => {

        res.status(404);
        return res.json(err.message);

      })
  }

  function updateMessageStatus(req, res) {
    const id = req.params.id;
    const status = req.body.status;
    const username = status === "Not Processed" ? "Not Proccessed" : req.body.username;

    data.getSpecificMessage(id)
        .then((message) => {
            message.status = status;
            message.processedBy = username;
            return data.updateMessageStatus(message);
        })
        .then(() => {
            res.status(201);
            return res.json('Successfully updated message status');
        })
        .catch((err) => {
            res.status(400);
            return res.json('Problem occured while updating message status. Please try again later.');
        });
  }

  return {
    name: "contact",
    send,
    getMessages,
    getSpecificMessage,
    updateMessageStatus
  };
};
