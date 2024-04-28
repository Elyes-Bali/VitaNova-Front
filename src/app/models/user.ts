export class User{
    id?:number;
    nom?:string;
    username?:string;
    email?:string;
    password?:string;
    gender?:string;
    prenom?:string;
    desctiption?:string;
    achievments?:string;
    fears?:string;
    age?:number;
    roles?: string; // Enumérations devraient être traitées différemment
    connected?: boolean;
    banned?: boolean;


}