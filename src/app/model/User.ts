export class User{
    username:string;
    password:string;
    email:string;
    role:any;

    constructor(username:string,password:string,email:string){
            this.username=username;
            this.password=password;
            this.email=email;
            this.role={id:2,name:'User'};
        }
    
}