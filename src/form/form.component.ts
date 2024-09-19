import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataUser } from '../app/app.model';

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
      payment_deadline: new FormControl('', [Validators.required]),
      username: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      basicSalary: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      province: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),
      isChecked: new FormControl(false,[Validators.required]),
      age: new FormControl(0,[Validators.required])
    })
  }
  
  get paymentDeadlineForm() {
    return this.addUserForm.get('payment_deadline');
  }
  get usernameForm(){
    return this.addUserForm.get('username');
  }
  get nameForm(){
    return this.addUserForm.get('name');
  }
  get emailForm(){
    return this.addUserForm.get('email');
  }
  get basicSalaryForm(){
    return this.addUserForm.get('basicSalary');
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
  get isCheckedForm(){
    return this.addUserForm.get('isChecked');
  }
  get ageForm(){
    return this.addUserForm.get('age');
  }

  onClick(event: any) {
    this.dataUser = {
      paymentDeadline: this.addUserForm.get('payment_deadline')?.value,
      username: this.addUserForm.get('username')?.value,
      name: this.addUserForm.get('name')?.value,
      email: this.addUserForm.get('email')?.value,
      basicSalary: this.addUserForm.get('basicSalary')?.value,
      city: this.addUserForm.get('city')?.value,
      zipcode: this.addUserForm.get('zipcode')?.value,
      province: this.addUserForm.get('province')?.value,
      isChecked: this.addUserForm.get('isChecked')?.value,
      age: this.addUserForm.get('age')?.value
    };
  }

  

}
