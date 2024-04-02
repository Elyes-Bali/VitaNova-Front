import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8085/vita/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + 'user/all');
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(API_URL + 'user/getUser/'+ id);
  }

  updateUser(id: any, user: any): Observable<string> {
    return this.http.put<string>(API_URL + 'user/updateUser/'+ id, user);
  }

  deleteUser(id: any): Observable<string> {
    return this.http.delete<string>(API_URL + 'user/deleteUser/'+ id);
  }

}
