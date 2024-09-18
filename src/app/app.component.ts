import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from '../app/app.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from "./form/form.component";
import { TableComponent } from './table/table.component';
import { UserdataService } from './service/userdata/userdata.service';
import { ReversePipe } from './pipe/reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, FormComponent, TableComponent, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
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

  constructor(
    private userDataService: UserdataService
  ){

  }

  ngOnInit(): void {
    this.title = 'FIF Challenge 1';
    const userData = this.userDataService.getUsers();
    console.log(userData)
    this.dataUser=userData;
    // this.dataUser = [{
    //   name: 'Reyy',
    //   email: 'reynard@gmail.com',
    //   address: {
    //     city: 'Jakarta',
    //     province: 'Jaksel',
    //     zipcode: 1231312,
    //     zone: 1
    //   },
      
    // },{
    //   name: 'Reyy',
    //   email: 'reynard@gmail.com',
    //   address: {
    //     city: 'Jakarta',
    //     province: 'Jaksel',
    //     zipcode: 1231312,
    //     zone: 2
    // }},{
    //   name: 'Reyy',
    //   email: 'reynard@gmail.com',
    //   address: {
    //     city: 'Jakarta',
    //     province: 'Jaksel',
    //     zipcode: 1231312,
    //     zone: 3
    // }}]
  }
  checkOutput(event:any){
    this.dataUser.push(event)
  }

  onSubmit() {
    this.isShown = !this.isShown;
  }

}