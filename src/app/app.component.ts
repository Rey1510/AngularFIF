import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from '../app/app.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from "../form/form.component";
import { TableComponent } from '../table/table.component';
import { PostdataService } from './service/postdata/postdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, FormComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
// onSubmit(event: any) {
//   this.dataUser.push({
//     name: this.addUserForm.get('name')?.value,
//     email: this.addUserForm.get('email')?.value,
//     address:{
//       city: this.addUserForm.get('city')?.value,
//       province: this.addUserForm.get('province')?.value,
//       zipcode: this.addUserForm.get('zipcode')?.value
//     }
//   }) 
// }
  title: string = 'fif-angular-app';
  dataUser: Array<DataUser> = []; //! buat bikin undefined
  randomId: string=""; 
  labelButton1: string = "ini button 1"; 
  labelButton2: string = "ini button 2"; 
  backgroundColor: string = "green";
  name: string = "";
  userName: string= "";
  updatedName: string = "";

  addUserForm! : FormGroup;

  // constructor() {
  //   this.addUserForm = new FormGroup({
  //     name: new FormControl('',[Validators.required, Validators.minLength(3)]),
  //     email: new FormControl('',[Validators.required, Validators.email]),
  //     city: new FormControl('',[Validators.required]),
  //     province: new FormControl('',[Validators.required]),
  //     zipcode: new FormControl('',[Validators.required])
  //   })
  // }

  // get nameForm(){
  //   return this.addUserForm.get('name');
  // }
  // get emailForm(){
  //   return this.addUserForm.get('email');
  // }
  // get cityForm(){
  //   return this.addUserForm.get('city');
  // }
  // get zipcodeForm(){
  //   return this.addUserForm.get('zipcode');
  // }
  // get provinceForm(){
  //   return this.addUserForm.get('province');
  // }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.backgroundColor = 'red'
  // }
  
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.backgroundColor = 'blue'
  // }

  constructor(
    private postDataService : PostdataService
  ) {

  }

  ngOnInit(): void {
    this.title = 'FIF Challenge 1';
    this.dataUser = this.postDataService.getUsers();
    // this.dataUser = [{
    //   name: 'Reyy',
    //   email: 'reynard@gmail.com',
    //   address: {
    //     city: 'Jakarta',
    //     province: 'Jaksel',
    //     zipcode: 1231312
    //   },
      
    // },{
    //   name: 'Reyy',
    //   email: 'reynard@gmail.com',
    //   address: {
    //     city: 'Jakarta',
    //     province: 'Jaksel',
    //     zipcode: 1231312
    // }}]
  }


  checkOutput(event:any){
    this.postDataService.postUsers(event);
  }
}