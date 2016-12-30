

module.exports = function (models) {
  let {Artist} = models;

  function createNewArtist(body) {
    return new Promise((resolve, reject) => {

      Artist.create({

            name:body.name,
            genres: body.genres,
            nationality: body.nationality,
            imgUrl: body.imgUrl,
            yearsActive: body.yearsActive,
            bio: body.bio

      })
        .then(() => {
          return resolve();
        })
        .catch(err => {
          return reject(err);
        });
    });
  }

  function addArtist(body) {
    return new Promise((resolve, reject) => {
      Artist.findOne({ name: body.name })
        .then(artist1 => {
          if (artist1) {
            return reject(new Error("This artist is already in the database"));
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

function removeFromSingles(songs,artistname){
  return new Promise((resolve,reject) => {
       Artist.findOne({'name':artistname})
       .then((artist) => {

           if (!artist) {
             return reject(new Error("This artist is not in the database. Please add him before adding new album."));
           }

            let newSongs = artist.singles.filter(s => songs.indexOf(s.name)== -1);

            return Artist.findOneAndUpdate({name:artistname},{$set:{ singles:newSongs } }, {new:true}, (err,artist1) => {
              if(err) {
                return reject(err);
              }
              return resolve();
            });
       })
       .catch(err => {
         return reject(err);
       });
    })
  }

  function getArtists() {
    return new Promise((resolve, reject) => {
      Artist.find({}, '_id name imgUrl genres')
        .then(artists => {

          return resolve(artists);
        });
    });
  }

  return {
    addArtist,
    removeFromSingles,
    getArtists
  };
};