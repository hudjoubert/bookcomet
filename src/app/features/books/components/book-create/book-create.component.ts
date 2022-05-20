import { BookIn } from './../../../../core/models/book-in';
import { BooksService } from './../../services/books.service';
import { SharedService } from './../../../../shared/services/shared.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCreateComponent implements OnInit {

  book: BookIn = {
    name: '',
    year: 0,
    authors: [''],
    summary: ''
  }

  constructor(
    public dialogRef: MatDialogRef<BookCreateComponent>,
    private booksService: BooksService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  addNewBook() {
    this.booksService.addNewBook(this.book).subscribe(() => {
      this.sharedService.showMessage('New book created');
      this.dialogRef.close();

    });
  }

}
