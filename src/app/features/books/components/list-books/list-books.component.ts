import { SharedService } from './../../../../shared/services/shared.service';
import { BookOut } from './../../../../core/models/book-out';
import { BooksService } from './../../services/books.service';
import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BookCreateComponent } from '../book-create/book-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListBooksComponent implements OnInit {

  displayedColumns: string[] = ['name', 'year', 'authors', 'actions'];
  dataSource?: BookOut[];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    private booksService: BooksService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  openDialogEditBook(id: number) {
    const dialogRef = this.dialog.open(BookCreateComponent, {
      width: '40%',
      data: {id: id}
    });
  }

  deleteBook(id: number) {
    this.booksService.deleteBook(id).subscribe(()=>{
      this.sharedService.showMessage('Book deleted with success');
    })
  }

  getAllBooks() {
    this.booksService.getAllBooks().subscribe(books => {
      this.dataSource = books
      this.resultsLength = books.length
      this.changeDetectorRefs.detectChanges();
    })
  }
}
