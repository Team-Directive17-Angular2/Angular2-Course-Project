export class User {
    constructor(
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public avatar: string,
        public followers: any[],
        public followings: any[],
        public favoriteArtists: any[],
        public favoriteAlbums: any[],
        public favoriteSongs: any[]
    ) { }
}