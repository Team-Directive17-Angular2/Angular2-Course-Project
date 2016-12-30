
module.exports = function ({data}) {

  function addAlbum(req, res) {
    const album = req.body;
    console.log('controller');
    data.removeFromSingles(album.songs,album.artist)
    .then(()=> {
        console.log('here');
        return data.addAlbum(album);
    })
    .then(() => {
        res.status(201);
        return res.json("Successfully added new album");
    })
    .catch((err) => {
        res.status(400);
        return res.json(err.message);
    });
  }


  return {
    name: "album",
    addAlbum
  };
};