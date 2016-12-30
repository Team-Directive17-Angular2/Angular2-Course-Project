
module.exports = function ({data}) {

  function AddSong(req, res) {
    const song = req.body;
    
    data.AddSong(song)
      .then(() => {
        res.status(201);
        return res.json("Successfully Added new song");
      })
      .catch((err) => {
        res.status(400);
        return res.json(err.message);
      });
  }


  return {
    name: "song",
    AddSong
  };
};