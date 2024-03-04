export class Psychologue {
    // psychologue.model.ts


    psychologueId?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    phonenumber?: string;
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
  
