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
    this.userData.push(event);
  }

  deleteUsers(event : any) {
    this.userData.splice(event,1);
  }

  toggleCompleted(index: number) {
    if (this.userData[index]) {
      this.userData[index].isCompleted = this.userData[index].isCompleted;
    }
  }

  constructor() { }
}
