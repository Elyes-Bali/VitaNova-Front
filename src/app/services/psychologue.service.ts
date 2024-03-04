// psychologue.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, Psychologue } from '../Models/Psychologue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsychologueService {
  readonly PRODUCT_API_URL = 'http://localhost:8085/psychologue/';
  readonly client = 'http://localhost:8085/client/';
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
}

