export class Message
{
 constructor(
    public title: string,
    public name: string,
    public email: number,
    public content: string,
    public sendOn: string,
    public processedBy: string,
    public status: string
 ){}
}