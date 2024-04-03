// psychologue.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, Psychologue,Consultation, User } from '../Models/Psychologue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsychologueService {
  readonly PRODUCT_API_URL = 'http://localhost:8085/vita/psychologue/';
  readonly client = 'http://localhost:8085/vita/client/';
  readonly count = 'http://localhost:8085/vita/';
  readonly consultation='http://localhost:8085/vita/consultation/'
  constructor(private httpclient: HttpClient) { }

  getAllPsychologues(){
    return this.httpclient.get<Psychologue[]>(this.PRODUCT_API_URL+'getAll');
  }
  addPsychologue(psychologue: Psychologue) {
    return this.httpclient.post(this.PRODUCT_API_URL + 'addpsychologue', psychologue);
  }
  editPsychologue(id: number ,psychologue: Psychologue) {
    const url = this.PRODUCT_API_URL + 'updatepsychologue/' + psychologue.psychologueId; // Assuming there's an "id" property in the Psychologue object
    return this.httpclient.put(url, psychologue);
  }
  getPsychologueById(id: number): Observable<Psychologue> {
    return this.httpclient.get<Psychologue>(`${this.PRODUCT_API_URL}getpsychologueId/${id}`);
  }
  deletePsychologue(id: number): Observable<void> {
    const url = `${this.PRODUCT_API_URL}deletepsychologue/${id}`;
    return this.httpclient.delete<void>(url);
  }
  getAllClient(){
    return this.httpclient.get<Client[]>(this.client+'getall');
  }
  getNumberConsultation(psychologueId: number): Observable<number> {
    const url = `${this.count}countPerDay/${psychologueId}`;
    return this.httpclient.get<number>(url);
  }
  
  getNumberConsultationPerMonth(psychologueId: number, year: number, month: string): Observable<number> {
    const url = `${this.count}consultation/${psychologueId}/${year}/${month}`;
    return this.httpclient.get<number>(url);
  }
  getConsultations(psychologueId: number, year: number, month: string): Observable<any> {
    const url = `${this.count}consultations/${psychologueId}/${year}/${month}`;
    return this.httpclient.get(url);
  }
  addconsultation(consultation:Consultation ) {
    return this.httpclient.post(this.consultation + 'addconsultation', consultation);
  }
  updateconsultation(id: number ,consultation: Consultation) {
    const url = this.consultation+ 'updateconsultation/' +consultation.idConsultation; // Assuming there's an "id" property in the Psychologue object
    return this.httpclient.put(url, consultation);
  }
  getconsultationById(id: number): Observable<Consultation> {
    return this.httpclient.get<Consultation>(`${this.consultation}getconsultationyid/${id}`);
  }
  deleteconsultation(id: number): Observable<void> {
    const url = `${this.consultation}deleteconsultation/${id}`;
    return this.httpclient.delete<void>(url);
  }
  getallconsultation(){
    return this.httpclient.get<Consultation[]>(this.consultation+'getall');
  }
  getAllQuestions(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.count+'questions/getall');
  }
  getAnswerByQuestionId(questionId: number): Observable<any> {
    return this.httpclient.get<any>(`${this.count}answers/${questionId}`);
  }  getConsultationsByUserId(userId: number): Observable<Consultation[]> {
    return this.httpclient.get<Consultation[]>(`${this.count}user/${userId}`);
  }

  
}

