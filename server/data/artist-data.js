

module.exports = function (models) {
  let {Artist} = models;

  function createNewArtist(body) {
    return new Promise((resolve, reject) => {
     
     console.log(body)
     
      Artist.create({
        
            artist:body.artist,
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
          console.log("boom")
          return reject(err);
        });
    });
  }

function removeFromSingles(songs,artistname){
  return new Promise((resolve,reject) => {
       Artist.findOne({'artist':artistname})
       .then((artist) => {
        let newSongs = artist.singles.filter(s => songs.indexOf(s.name)== -1);
        console.log(newSongs);
        Artist.findOneAndUpdate({artist:artistname},{$set:{
          singles:newSongs
        } },{new:true},(err,artist1) => {
          if(err){
            return reject(err);
          }
          return resolve();
        })
       })
  })
}

  return {
    AddArtist,
    removeFromSingles
  };
};