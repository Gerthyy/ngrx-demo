import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  retrievedBookList,
  addBook,
  removeBook,
  addAll,
} from './state/actions/books.action';
import { GoogleBooksService } from './book-list/books.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$: Observable<any>;
  bookCollection$: Observable<any>;
  allBookList$: Observable<any>;

  onAdd(bookId: any) {
    let selectedBook: any = [];
    this.store.select('books').subscribe((store_books: any) => {
      selectedBook = store_books.filter((item: any) => {
        return item.id === bookId;
      });
      console.log(selectedBook);
    });
    this.store.dispatch(addBook({ bookId: selectedBook }));
  }

  onRemove(book: any) {
    console.log('bookId', book);

    this.store.dispatch(removeBook({ book }));
  }

  onAddAll() {
    let bookLists: any = [];
    this.store.select('books').subscribe((store_books: any) => {
      bookLists = store_books.map((item: any) => {
        return item;
      });
    });
    this.store.dispatch(addAll({ bookList: bookLists }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<{ books: any; collection: any; addAll: any }>
  ) {
    this.books$ = store.select('books');
    this.bookCollection$ = store.select('collection');
    this.allBookList$ = store.select('addAll');
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
