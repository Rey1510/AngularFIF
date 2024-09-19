// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DataUser } from '../app/app.model';
// // import { PostdataService } from '../app/service/postdata/postdata.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { HttpRequestService } from '../app/service/http-service/http-request.service';

// @Component({
//   selector: 'app-table',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule],
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.scss']
// })
// export class TableComponent {

//   constructor(
//     // private postDataService: PostdataService,
//     private httpRequestService: HttpRequestService,
//     private snackBar: MatSnackBar
//   ) { }

//   @Input() dataUser: Array<DataUser> = [];
//   @Output() deleteById = new EventEmitter<string>();

//   deleteData(event: any) {
//     // this.postDataService.deleteUsers(event);
//     this.snackBar.open('Data successfully deleted', 'Close', {
//       duration: 5000
//     });
//     this.deleteById.emit(event)
//   }

//   onCompleted(index: number) {
//     // this.httpRequestService.toggleCompleted(index);
//   }

//   isDeadlineWarning(date: Date): boolean {
//     const today = new Date();
//     const deadline = new Date(date);

//     today.setHours(0, 0, 0, 0);
//     deadline.setHours(0, 0, 0, 0);

//     const threeDaysBeforeToday = new Date(deadline);
//     threeDaysBeforeToday.setDate(deadline.getDate() - 3);

//     return today >= threeDaysBeforeToday && today <= deadline;
//   }


// }
