import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from '../app/app.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from "../form/form.component";
import { TableComponent } from '../table/table.component';
import { HttpRequestService } from './service/postdata/http-service/http-request.service';
// import { PostdataService } from './service/postdata/postdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, FormComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title: string = 'fif-angular-app';
  dataUser: Array<DataUser> = []; //! buat bikin undefined


  addUserForm! : FormGroup;

  constructor(
    // private postDataService : PostdataService
    private httpRequestService : HttpRequestService
  ) {
    
  }

  

  ngOnInit(): void {
    this.title = 'FIF Challenge 3';
    this.fetchDataUser();
    // this.dataUser = this.postDataService.getUsers();
  }

  checkOutput(event:any){
    this.dataUser.push(event)
  }

  fetchDataUser() {
    this.httpRequestService.getData().subscribe((res: any) => {
    this.dataUser = res
    // console.log(res);
  }, (err) => {
    console.error('Error fetching data:', err);
  });
  }

  createUser(event : any) {
  this.httpRequestService.createUser(event).subscribe((res : any) => {
    console.log("Sukses create user", res);
    this.fetchDataUser()
    });
  }

  deleteUser(id: string) {
    this.httpRequestService.deleteUser(id).subscribe(() => {
      console.log('User deleted successfully');
      this.fetchDataUser();
    }, (err) => {
      console.error('Error deleting user:', err);
    });
  }

}