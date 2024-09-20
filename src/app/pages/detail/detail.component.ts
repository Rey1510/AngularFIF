import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataUser } from '../../app.model';
import { HttpRequestService } from '../../service/http-service/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  title: String = '';
  addUserForm! : FormGroup;
  dataUser!: DataUser;
  userId: string | null = null;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private httpRequestService : HttpRequestService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
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
  
  ngOnInit(): void {
    this.title = 'Table Detail';
    this.userId = this.route.snapshot.paramMap.get('id') || '';

    // if (this.userId !== '0') {
    //   this.fetchUserData(this.userId);
    // }

    if (this.userId !== '0') {
      this.isEditing = true;
      this.fetchUserData(this.userId);
    }
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
    if (this.isEditing === true) {
      const temp: any = this.userId
      this.updateUser(temp, this.dataUser);
    } else {
      this.createUser(this.dataUser);
    }
  }

  

  createUser(event : any) {
    this.httpRequestService.createUser(event).subscribe((res : any) => {
      this.snackBar.open('Data successfully created', 'Close', {
        duration: 5000
      });
      console.log("Sukses create user", res);
      });
    }

    updateUser(id: string, user: DataUser) {
      this.httpRequestService.updateUser(id, user).subscribe((res: any) => {
        this.snackBar.open('Data successfully updated', 'Close', {
          duration: 5000
        });
        console.log("User updated successfully", res);
      });
    }

    fetchUserData(id: string) {
      this.httpRequestService.getUserById(id).subscribe((user: DataUser) => {
        const formattedDate = user.paymentDeadline ? new Date(user.paymentDeadline).toISOString().split('T')[0] : '';
        this.addUserForm.patchValue({
          payment_deadline: formattedDate,
          username: user.username,
          name: user.name,
          email: user.email,
          basicSalary: user.basicSalary,
          city: user.city,
          province: user.province,
          zipcode: user.zipcode,
          isChecked: user.isChecked,
          age: user.age
        });
      }, (err) => {
        console.error('Error fetching user data:', err);
      });
    }

    getButtonLabel(): string {
      return this.userId && this.userId !== '0' ? 'Simpan Perubahan' : 'Simpan';
    }

  }