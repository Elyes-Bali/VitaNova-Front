export class Psychologue {
    // psychologue.model.ts


    psychologueId?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    phonenumber?: string;
    specialty?: Specialty;
    gender?: string;
    chats?: Chat[];
    rapportPsy?: RapportPsy[];
    notifications?: Notifications[];
    clients?: Client[];

  }
  export interface Chat {
    idChat?: number;
    contenu: string;
    psychologue?: Psychologue;
  }
  export interface RapportPsy {
    idRapportPsy?: number;
    description: string;
    dateRappPs: Date;
    psychologue?: Psychologue;
    client?: Client;
  }
  export interface Notifications {
    idNotifications?: number;
    DestinatorId: number;
    ContentNot: string;
    psychologues?: Psychologue[];
  }
  export interface Client {
    clientId?: number;
    nom: string;
    prenom: string;
    email: string;
    phonenumber: string;
    psychologue?: Psychologue;
    rapportPsy?: RapportPsy;
  }  

  export interface Consultation {
  idConsultation?: number;
  startTime: string; // Assuming LocalTime is serialized as string
  consultationdate: string; // Assuming LocalDate is serialized as string
  psychologue: Psychologue;
  client: Client;
  user:User;
}
export interface Answer {
  idanswer: number;
  text: string;
  question: Question;
}
export interface Question {
  idquestion: number;
  text: string;
  answer: Answer;
}
export enum Specialty {
  DEPRESSION = 'DEPRESSION',
  RELATIONSHIP = 'RELATIONSHIP',
  ANXIETY = 'ANXIETY'
}
export class User{
  id?:number;
  nom?:string;
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