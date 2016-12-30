
module.exports = function ({data, fs, path, imageDecoder}) {

  function addArtist(req, res) {
      const artist = req.body;
      const imageData = req.body.dataUrl;

      let imageBuffer = imageDecoder.decode(imageData);
      let imageName = "artist-" + Date.now() + ".jpg";
      let imagePath = path.join(__dirname, "..", "..", "/src/assets/images/artist-pictures/", imageName)

      fs.writeFile(imagePath, imageBuffer.data, (err) => {
          if(err) {
              res.status(400);
              return res.json("Problem with saving the image. Please try again later.");
          } else {

              artist.imgUrl = imageName;

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
      });
  }

  function getArtists(req, res) {
    data.getArtists()
      .then((artists) => {

        res.status(200).json({data: artists})
      })
      .catch((err) => {

        res.status(404);
        return res.json(err.message);

      })
  }

  return {
    name: "artist",
    addArtist,
    getArtists
  };
};