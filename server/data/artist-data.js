

module.exports = function (models) {
  let {Artist} = models;

  function createNewArtist(body) {
    return new Promise((resolve, reject) => {
     
     console.log(body)
     let genresArray = body.genres.split(',');
     let albumsArray = body.albums.split(',');
      Artist.create({
        
            artist:body.artist,
            genres: genresArray,
            nationality: body.nationality,
            imgUrl: body.imgUrl,
            yearsActive: body.yearsActive,
            albums:albumsArray,
            bio: body.bio

      })
        .then(() => {
          return resolve();
        })
        .catch(err => {
          console.log(err);
          return reject(err);
        });
    });
  }

  function AddArtist(body) {
    return new Promise((resolve, reject) => {
      Artist.findOne({
     
          artist: body.artist
        
      })
        .then(artist1 => {
          if (artist1) {
            return reject(new Error("this artist is already in the database"));
          }

          return createNewArtist(body);
        })
        .then(() => {
          return resolve();
        })
        .catch(err => {
          return reject(err);
        });
    });
  }



  return {
    AddArtist
  };
};