import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../../app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  apiUrl: string = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee';

  constructor(
    private httpClient: HttpClient
  ) { }

  getData() {
    return this.httpClient.get(this.apiUrl)
  }

  createUser(payload: DataUser) {
    return this.httpClient.post(this.apiUrl, payload)
  }
  
  updateUser(id: string, user: DataUser): Observable<DataUser> {
    return this.httpClient.put<DataUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: String) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  }


  getUserById(id: string): Observable<DataUser> {
    return this.httpClient.get<DataUser>(`${this.apiUrl}/${id}`);
  }

  // toggleCompleted(index: number) {
  //   if (this.userData[index]) {
  //     this.userData[index].isCompleted = this.userData[index].isCompleted;
  //   }
  // }

}
