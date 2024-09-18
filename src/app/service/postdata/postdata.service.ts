import { Injectable } from '@angular/core';
import { userDataPublic } from '../../user.data';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  userData = userDataPublic

  getUsers(){
    return this.userData
  }

  postUsers(event : any) {
    this.userData.push(event)
  }

  constructor() { }
}
