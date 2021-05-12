import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { retrievedBookList, addBook, removeBook } from './state/books.action';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$: Observable<any>;
  bookCollection$: Observable<any>;

  onAdd(bookId: any) {
    console.log('1', 'onadd');
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any) {
    console.log('1', 'onRemove');
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<{ books: any; collection: any }>
  ) {
    this.books$ = store.select('books');
    this.bookCollection$ = store.select('collection');
    console.log('3', 'constructor', this.books$, this.bookCollection$);
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
