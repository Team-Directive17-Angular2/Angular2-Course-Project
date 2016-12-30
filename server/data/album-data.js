

module.exports = function (models) {
  let {Artist,Album, Song} = models;

  function createNewAlbum(body,songs) {
    return new Promise((resolve, reject) => {

     let songsToBeAdd = [];

     for(let song of songs){
        let songToBeAdded ={
            id:song._id,
            name:song.name
       }
       songsToBeAdd.push(songToBeAdded);
     }

      Album.create({
            album:body.album,
            artist:body.artist,
            genres: body.genres,
            imgUrl: body.imgUrl,
            year: body.year,
            songs: songsToBeAdd

      })
        .then((album) => {
          Artist.update({'artist': album.artist},{
            $push: {
               'albums':{
                 'id':album._id,
                 'name':album.album,
                 'img': album.imgUrl
               }
            }
          },{upsert:true},(err,artist) => {
             if(err){
               return reject(err);
             }
          });
          return resolve();
        })
        .catch(err2 => {
          return reject(err2);
        });
    });
  }

  function addAlbum(body) {
    return new Promise((resolve, reject) => {
      Artist.findOne({ artist: body.artist })
      .then(artist1 => {
          if (!artist1) {
            return reject(new Error("This artist is not in the database. Please add him before adding new album."));
          }
          for(let name of body.songs){
            Song.findOneAndUpdate({'artist':body.artist,'name':name},{$set:{'album':body.album}},{new:true},(err2,song) => {
               if(err2){
               }
             });
          }

          return Song.find({'artist': body.artist,'name': {$in:body.songs}});
        })
        .then((songs)=>{
          return createNewAlbum(body,songs);
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
    addAlbum
  };
};