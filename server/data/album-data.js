

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
            name:body.name,
            artist:body.artist,
            genres: body.genres,
            imgUrl: body.imgUrl,
            year: body.year,
            songs: songsToBeAdd

      })
        .then((album) => {
          Artist.update({'name': album.artist},{
            $push: {
               'albums':{
                 'id':album._id,
                 'name':album.name,
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
      Artist.findOne({ name: body.artist })
      .then(artist1 => {
          if (!artist1) {
            return reject(new Error("This artist is not in the database. Please add him before adding new album."));
          }
          for(let songName of body.songs){
            Song.findOneAndUpdate({'artist':body.artist,'name':songName},{$set:{'album':body.name}},{new:true},(err2,song) => {
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

  function getAlbums() {
    return new Promise((resolve, reject) => {
      Album.find({}, '_id name imgUrl genres')
        .then(albums => {

          return resolve(albums);
        });
    });
  }

  function getSpecificAlbum(id) {
    return new Promise((resolve, reject) => {
        Album.findOne({ _id: id }, (err, album) => {
            if (err) {
                return reject(err);
            }

            return resolve(album);
        });
    });
  }

  return {
    addAlbum,
    getAlbums,
    getSpecificAlbum
  };
};