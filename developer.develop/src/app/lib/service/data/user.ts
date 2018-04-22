export class User {

    public uid: number = 0;
    public mail: string = '';
    public token: string = '';
    public logoutToken?: string;
    public firstName?: string;
    public lastName?: string;
    public telephone?: string;
    public picture?: string;
    public address?: string[];

    constructor(uid,mail,token){
        this.uid = uid;
        this.mail = mail;
        this.token = token;
    }


}
