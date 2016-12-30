export class Album
{
 constructor(
    public artist: string,
    public genres: string,
    public year: number,
    public album: string,
    public imgUrl: string,
    public songs: string[]
 ){}
}