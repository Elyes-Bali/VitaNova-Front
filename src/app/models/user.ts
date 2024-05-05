import {Achievement} from "./Achievement";

export class User{
    id?:number;
    nom?:string;
    email?:string;
    username:string;
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

  achievements: Achievement[] = []
}
