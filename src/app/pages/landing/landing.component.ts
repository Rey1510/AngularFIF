import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataUser } from '../../app.model';
// import { PostdataService } from '../app/service/postdata/postdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpRequestService } from '../../service/http-service/http-request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  title: string = 'Table All User';

  constructor(
    private router: Router,
    // private postDataService: PostdataService,
    private httpRequestService: HttpRequestService,
    private snackBar: MatSnackBar
  ) { }

  @Input() dataUser: Array<DataUser> = [];
  @Output() deleteById = new EventEmitter<string>();

  ngOnInit(): void {
    this.title = 'Table All User';
    this.fetchDataUser();
  }

  deleteData(event: any) {
    // this.postDataService.deleteUsers(event);
    this.snackBar.open('Data successfully deleted', 'Close', {
      duration: 5000
    });
    this.deleteById.emit(event)
  }

  onCompleted(index: number) {
    // this.httpRequestService.toggleCompleted(index);
  }

  fetchDataUser() {
    this.httpRequestService.getData().subscribe((res: any) => {
    this.dataUser = res
    // console.log(res);
  }, (err) => {
    console.error('Error fetching data:', err);
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

  isDeadlineWarning(date: Date): boolean {
    const today = new Date();
    const deadline = new Date(date);

    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);

    const threeDaysBeforeToday = new Date(deadline);
    threeDaysBeforeToday.setDate(deadline.getDate() - 3);

    return today >= threeDaysBeforeToday && today <= deadline;
  }

  addUser() {
    this.router.navigate(['/detail', 'new']);
  }

}
