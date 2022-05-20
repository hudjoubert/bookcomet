import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BookCreateComponent } from './components/book-create/book-create.component';

@NgModule({
  declarations: [
    BooksComponent,
    ListBooksComponent,
    BookCreateComponent
  ],
  imports: [
    SharedModule,
    BooksRoutingModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
