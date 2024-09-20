import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser, DataUserResp } from '../app/app.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from "./form/form.component";
import { TableComponent } from './table/table.component';
import { UserdataService } from './service/userdata/userdata.service';
import { ReversePipe } from './pipe/reverse.pipe';
import { HttpClient } from '@angular/common/http';
import { HttpRequestService } from './service/http-service/http-request.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, FormComponent, TableComponent, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit{

  constructor(
    private userDataService: UserdataService,
    private httpRequestService: HttpRequestService
  ){
  
  }
  

  title: string = 'fif-angular-app';
  dataUser!: Array<DataUser>; //! buat bikin undefined
  randomId: string=""; 
  labelButton1: string = "ini button 1"; 
  labelButton2: string = "ini button 2"; 
  backgroundColor: string = "green";
  name: string = "";
  userName: string= "";
  updatedName: string = "";

  addUserForm! : FormGroup;
  isShown: boolean = false;
  // isShown: boolean = true;
  today = new Date();
  isLoading: boolean = false;

  

  ngOnInit(): void {
    this.title = 'FIF Challenge 1';
    const userData = this.userDataService.getUsers();
    // console.log(userData)
    this.dataUser=userData;
    this.fetchDataUser();
  }

  checkOutput(event:any){
    this.dataUser.push(event)
  }

  onSubmit() {
    this.isShown = !this.isShown;
  }

  fetchDataUser() {
    this.isLoading = true;
    this.httpRequestService.getData().subscribe((res: any) => {
    this.isLoading = true;
    this.dataUser = res
    // console.log(res);
  }, (err) => {
    this.isLoading = false;
    console.error('Error fetching data:', err);
  });
  }

  createUser( ) {
    const payload = {
      "paymentDeadline": new Date,
      "username": "Janessa25",
      "name": "Raoul",
      "email": "Laisha.Kutch36@yahoo.com",
      "basicSalary": "949883087",
      "city": "Hammesworth",
      "province": "Mongolia",
      "zipcode": "TC",
      "isChecked": false,
      "age": 93,
      "id": "38"
  }
  this.httpRequestService.createUser(payload).subscribe((res : any) => {
    console.log("Sukses create user", res)
  });
  }

}