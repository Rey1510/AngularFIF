import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataUser } from '../app/app.model';
import { PostdataService } from '../app/service/postdata/postdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(
    private postDataService: PostdataService,
    private snackBar: MatSnackBar
  ) { }

  @Input() dataUser: Array<DataUser> = [];

  deleteData(event: any) {
    this.postDataService.deleteUsers(event);
    this.snackBar.open('Data successfully deleted', 'Close', {
      duration: 5000
    });
  }

  onCompleted(index: number) {
    this.postDataService.toggleCompleted(index);
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
}
