
module.exports = function ({data}) {

  function addArtist(req, res) {
    const artist = req.body;

    data.addArtist(artist)
      .then(() => {
        res.status(201);
        return res.json("Successfully added new artist");
      })
      .catch((err) => {
        res.status(400);
        return res.json(err.message);
      });
  }


  return {
    name: "artist",
    addArtist
  };
};