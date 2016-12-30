

module.exports = function (models) {
  let {Artist, Album, Song} = models;

  function createNewSong(body) {
    return new Promise((resolve, reject) => {

     console.log(body)

      Song.create({
            name:body.name,
            artist:body.artist,
            duration:body.duration

      })
        .then((song) => {
          Artist.update({ 'artist':song.artist },{
              $push:{
                  'singles':{
                      'id':song._id,
                      'name':song.name
                  }
              }
           },{upsert:true},(err,artist) =>{
               if(err){
                   console.log(err)
               }
         });

          return resolve();
        })
        .catch(err2 => {
          console.log(err2);
          return reject(err2);
        });
    });
  }

  function addSong(body) {
    return new Promise((resolve, reject) => {
      Artist.findOne({

          artist: body.artist

      })
        .then(artist1 => {
          if (!artist1) {
            return reject(new Error("This artist is not in the database. Please add him before adding new song."));
          }

          return createNewSong(body);
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
    addSong
  };
};