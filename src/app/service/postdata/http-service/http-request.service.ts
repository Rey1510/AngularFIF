import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../../../app.model';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  apiUrl: string = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee';
  userData: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  getData() {
    return this.httpClient.get(this.apiUrl)
  }

  createUser(payload: DataUser) {
    return this.httpClient.post(this.apiUrl, payload)
  }

  deleteUser(id: String) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  }

  // toggleCompleted(index: number) {
  //   if (this.userData[index]) {
  //     this.userData[index].isCompleted = this.userData[index].isCompleted;
  //   }
  // }

}
