export class User{
    id?:number;
    username?: string;
    email?: string;
    password?: string;
    creationDate?: Date;
    nom?: string;
    prenom?: string;
    gender?: string;
    description?: string;
    achievements?: string;
    fears?: string;
    age?: number;
    banned?: boolean;
    activated?: boolean;
    activationToken?: string;
    activationTokenCreationDate?: Date;
    pwdToken?: string;
    pwdTokenCreationDate?: Date;
    mfaEnabled?: boolean;
    secret?: string;
    consultationsAsPsychiatrist?: Consultation[];
    consultationsAsClient?: Consultation[];


}
export interface Consultation {
    idConsultation?: number;
    startTime: string; // Assuming you're using string representation for time in Angular
    consultationdate: string; // Assuming you're using string representation for date in Angular
    psychiatrist: User;
    client: User;
  }
  export interface RapportPsy {
    idRapportPsy: number;
    description: string;
    dateRappPs: Date;
    psychiatrist: User;
    clients: User;
  }