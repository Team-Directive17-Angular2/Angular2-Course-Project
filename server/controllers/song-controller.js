
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

  function getAllSongs(req, res) {
    data.getAllSongs()
        .then((songs) => {
          res.status(200);
          return res.json({data:songs})
        })
        .catch((err) => {

          res.status(404);
          return res.json(err.message);

        })
  }

  function getSpecificSong(req, res) {
    data.getSpecificSong(req.params.id)
      .then((song) => {

        res.status(200);
        return res.json({data: song})
      })
      .catch((err) => {

        res.status(404);
        return res.json(err.message);

      })
  }

  return {
    name: "song",
    addSong,
    getAllSongs,
    getSpecificSong
  };
};