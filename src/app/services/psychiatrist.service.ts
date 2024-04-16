import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultation, RapportPsy, User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsychiatristService {

  private apiUrl = 'http://localhost:8085/vita/api/user';
  private consultation = 'http://localhost:8085/vita/user/';
  private baseUrl = 'http://localhost:8085/vita/consultation'
  private rapport = 'http://localhost:8085/vita/rapportpsy'
  private url = 'http://localhost:8085/vita'
  constructor(private http: HttpClient) { }

  getPsychiatrists(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/psy`);
  }
  getConsultationsByUserId(userId: number): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.consultation}${userId}`);
  }
  addConsultation(consultation: Consultation): Observable<Consultation> {
    return this.http.post<Consultation>(`${this.baseUrl}/addconsultation`, consultation);
  }
  updateConsultation(id: number, consultation: Consultation): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/updateconsultation/${id}`, consultation);
  }

  getAllConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.baseUrl}/consultation/getall`);
  }

  getConsultationById(id: number): Observable<Consultation> {
    return this.http.get<Consultation>(`${this.baseUrl}/show/${id}`);
  }

  deleteConsultationById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteconsultation/${id}`);
  }
  addRapportPsy(rapportPsy: RapportPsy): Observable<RapportPsy> {
    return this.http.post<RapportPsy>(`${this.rapport}/addrapportpsy`, rapportPsy);
  }

  updateRapportPsy(id: number, rapportPsy: RapportPsy): Observable<void> {
    return this.http.put<void>(`${this.rapport}/updaterapportpsy/${id}`, rapportPsy);
  }

  getRapportPsyById(id: number): Observable<RapportPsy> {
    return this.http.get<RapportPsy>(`${this.rapport}/getrapportpsychologueId/${id}`);
  }

  getAllRapports(): Observable<RapportPsy[]> {
    return this.http.get<RapportPsy[]>(`${this.rapport}/getAll`);
  }
  getclients(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/client`);
  }
  getRapportPsyByPsychiatristId(psychiatristId: number): Observable<RapportPsy[]> {
    const url = `${this.url}/psychiatrist/${psychiatristId}`;
    return this.http.get<RapportPsy[]>(url);
  }
  deleteRapportPsy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.rapport}/deleterapportpsychologue/${id}`);
  }
  getConsultationsPerDayInMonth(psychologueId: number, year: number, month: string): Observable<any> {
    // Adjust the URL based on your backend API endpoint
    const url = `http://localhost:8085/vita/consultations/${psychologueId}/${year}/${month}`;
    return this.http.get<any>(url);
  }
  getAllQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'questions/getall');
  }
  getAnswerByQuestionId(questionId: number): Observable<any> {
    return this.http.get<any>(`${this.url}answers/${questionId}`);
}}