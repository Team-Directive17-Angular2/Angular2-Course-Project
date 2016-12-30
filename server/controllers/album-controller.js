
module.exports = function ({data}) {

  function AddAlbum(req, res) {
    const album = req.body;
    data.removeFromSingles(album.songs,album.artist)
    .then(()=> {
    data.AddAlbum(album)
      .then(() => {
        res.status(201);
        return res.json("Successfully Added new album");
      })
      .catch((err) => {
        res.status(400);
        return res.json(err.message);
      });
    })
  }


  return {
    name: "album",
    AddAlbum
  };
};