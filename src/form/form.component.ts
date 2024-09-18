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
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      city: new FormControl('',[Validators.required]),
      province: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),
      payment_deadline: new FormControl(new Date()),
      boolCompleted: new FormControl(false)
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
  get isComplete(){
    return this.addUserForm.get('boolCompleted')
  }

  onClick(event:any){
    this.dataUser={
      name: this.addUserForm.get('name')?.value,
      email: this.addUserForm.get('email')?.value,
      address:{
        city: this.addUserForm.get('city')?.value,
        province: this.addUserForm.get('province')?.value,
        zipcode: this.addUserForm.get('zipcode')?.value
      },
      payment_deadline: this.addUserForm.get('payment_deadline')?.value,
      isCompleted: this.addUserForm.get('boolCompleted')?.value
    }
    this.submitButton.emit(this.dataUser);
  }
}
