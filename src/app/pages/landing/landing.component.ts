import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataUser } from '../../app.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpRequestService } from '../../service/http-service/http-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  dataUser!: DataUser[];
  title: string = 'Table All User';

  constructor(
    private router: Router,
    private httpRequestService: HttpRequestService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchDataUser();
  }

  deleteData(event: any) {
    this.httpRequestService.deleteUser(event).subscribe(() => {
      this.snackBar.open('Data successfully deleted', 'Close', {
        duration: 5000
      });
      this.fetchDataUser();
    }, (err) => {
      console.error('Error deleting user:', err);
    });
  }

  fetchDataUser() {
    this.httpRequestService.getData().subscribe((res: any) => {
      this.dataUser = res;
    }, (err) => {
      console.error('Error fetching data:', err);
    });
  }

  addUser() {
    this.router.navigate(['/detail/0/add']);
  }

  redirectToDetail(id: any) {
      this.router.navigate([`/detail/${id}/put`]);
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

  onToggleIsChecked(userId: any, event: any) {
    this.httpRequestService.updateUser(userId, event).subscribe((updatedUser: DataUser) => {
      this.snackBar.open('Checked status updated', 'Close', {
        duration: 3000
      });
      console.log('User checked status updated', updatedUser);
    }, (err) => {
      console.error('Error updating checked status:', err);
    });
  }

}
