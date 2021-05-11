import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { retrievedBookList, addBook, removeBook } from './state/books.action';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$: Observable<any>;
  bookCollection$: Observable<any>;
  // books$ = this.store.pipe(select(selectBooks) as any);
  // bookCollection$ = this.store.pipe(select(selectBookCollection) as any);

  onAdd(bookId: any) {
    debugger;
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<{ books: any; collection: any }>
  ) {
    this.books$ = store.select('books');
    this.bookCollection$ = store.select('collection');
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}

// book$: Observable<boolean[]>;

// constructor(private store: Store<{ book: any }>) {
//   this.book$ = store.select('book');
// }
// Update_Name() {
//   this.store.dispatch(UPDATE_NAME());
// }
