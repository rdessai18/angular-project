export class User{
    public username: string;
    public password: string;
    private _token: string;
    private _tokenExpirationDate: Date;

    constructor(username: string, password: string, token: string, tokenExpiry: Date){
        this.username=username;
        this.password=password;
        this._token=token;
        this._tokenExpirationDate=tokenExpiry;
    }
    get token(){
        if(this._tokenExpirationDate != null || this._tokenExpirationDate > new Date()){
            return this._token;
        }
    }
}