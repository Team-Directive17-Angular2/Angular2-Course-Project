
module.exports = function ({data}) {

  function AddArtist(req, res) {
    const artist = req.body;
    
    data.AddArtist(artist)
      .then(() => {
        res.status(201);
        return res.json("Successfully Added new artist");
      })
      .catch((err) => {
        res.status(400);
        return res.json(err.message);
      });
  }


  return {
    name: "artist",
    AddArtist
  };
};