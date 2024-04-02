import { Role } from "./Role";

export class User{
    id?:number;
    username?:string;
    nom?:string;
    email?:string;
    password?:string;
    gender?:string;
    prenom?:string;
    desctiption?:string;
    achievments?:string;
    fears?:string;
    age?:number;
    roles?: string[]; // Enumérations devraient être traitées différemment
    connected?: boolean;
    banned?: boolean;


}