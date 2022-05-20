import { BookCreateComponent } from './book-create/book-create.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialogCreateBook() {
    const dialogRef = this.dialog.open(BookCreateComponent, {
      width: '40%',
    });
  }
}
