export class Artist {
    constructor(
       public artist: string,
       public genres: string[],
       public yearsActive: string,
       public nationality: string,
       public bio: string,
       public imgUrl: string
    ){}
}