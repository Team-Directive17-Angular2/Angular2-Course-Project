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

  return {
    name: "contact",
    send
  };
};
