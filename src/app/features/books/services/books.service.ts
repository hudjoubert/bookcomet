import { SharedService } from './../../../shared/services/shared.service';
import { BookOut } from './../../../core/models/book-out';
import { BookIn } from './../../../core/models/book-in';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = 'https://publishing-house-service.herokuapp.com/api/v1/books';

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  addNewBook(book: BookIn): Observable<BookOut> {
    return this.http.post<BookOut>(this.baseUrl, book).pipe(
      catchError(this.sharedService.handleError)
    );
  }

  getAllBooks(): Observable<BookOut[]> {
    return this.http.get<BookOut[]>(this.baseUrl);
  }

  //Need to finish
  getAllBooksByName(name: string): Observable<BookOut[]> {
    return this.http.get<BookOut[]>(this.baseUrl);
  }

  getBook(id: number): Observable<BookOut> {
    return this.http.get<BookOut>(`${this.baseUrl}/${id}`);
  }

  deleteBook(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError(this.sharedService.handleError)
    );
  }

  updateBook(book: BookOut): Observable<BookOut> {
    return this.http.put<BookOut>(`${this.baseUrl}/${book.id}`, book).pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
