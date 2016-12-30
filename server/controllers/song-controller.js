
module.exports = function ({data}) {

  function addSong(req, res) {
    const song = req.body;

    data.addSong(song)
      .then(() => {
        res.status(201);
        return res.json("Successfully added new song");
      })
      .catch((err) => {
        res.status(400);
        return res.json(err.message);
      });
  }

  return {
    name: "song",
    addSong
  };
};