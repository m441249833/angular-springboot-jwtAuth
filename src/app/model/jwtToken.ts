export class jwtToken{
    ROLE:string;
    TOKEN:string;

    constructor(ROLE:string, TOKEN : string){
        this.ROLE = ROLE;
        this.TOKEN = TOKEN;
    }
    
}