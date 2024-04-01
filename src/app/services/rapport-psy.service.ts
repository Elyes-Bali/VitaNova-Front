import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RapportPsy } from '../Models/Psychologue';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RapportPsyService {
  readonly rapport = 'http://localhost:8085/vita/rapportpsy/';
  readonly pdf = 'http://localhost:8085/vita/';
  constructor(private httpclient: HttpClient) { }

  getAllRapportPsy(){
    return this.httpclient.get<RapportPsy[]>(this.rapport+'getAll');
  }
  addrapportPsy(RapportPsy:RapportPsy) {
    return this.httpclient.post<RapportPsy>(this.rapport + 'addrapportpsy', RapportPsy);
  }
  getrapportById(id: number): Observable<RapportPsy> {
    return this.httpclient.get<RapportPsy>(`${this.rapport}getrapportpsychologueId/${id}`);
  }
  editrapportPsychologue(id: number ,rapportpsy: RapportPsy) {
    const url = this.rapport + 'updaterapportpsy/'+rapportpsy.idRapportPsy ; // Assuming there's an "id" property in the Psychologue object
    return this.httpclient.put(url, rapportpsy);
  }
  deleterapportPsychologue(id: number): Observable<void> {
    const url = `${this.rapport}deleterapportpsychologue/${id}`;
    return this.httpclient.delete<void>(url);
}
generatePdf(rapportPsyId: number): Observable<any> {
  const url = `${this.pdf}generate-pdf/${rapportPsyId}`;
  return this.httpclient.get(url);
}}

