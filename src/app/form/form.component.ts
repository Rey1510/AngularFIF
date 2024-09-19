import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataUser } from '../app.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  addUserForm! : FormGroup;
  dataUser!: DataUser;
  @Output() submitButton = new EventEmitter<DataUser>();

  constructor() {
    this.addUserForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      city: new FormControl('',[Validators.required]),
      province: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required])
    })
  }

  get nameForm(){
    return this.addUserForm.get('name');
  }
  get emailForm(){
    return this.addUserForm.get('email');
  }
  get cityForm(){
    return this.addUserForm.get('city');
  }
  get zipcodeForm(){
    return this.addUserForm.get('zipcode');
  }
  get provinceForm(){
    return this.addUserForm.get('province');
  }

  // onClick(event:any){
  //   this.dataUser={
  //     name: this.addUserForm.get('name')?.value,
  //     email: this.addUserForm.get('email')?.value,
  //     address:{
  //       city: this.addUserForm.get('city')?.value,
  //       province: this.addUserForm.get('province')?.value,
  //       zipcode: this.addUserForm.get('zipcode')?.value
  //     }
  //   }
  //   this.submitButton.emit(this.dataUser);
  // }
}
