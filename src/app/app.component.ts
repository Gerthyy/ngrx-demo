import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  retrievedBookList,
  addBook,
  removeBook,
  addAll,
} from './state/books.action';
import { GoogleBooksService } from './book-list/books.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$: Observable<any>;
  bookCollection$: Observable<any>;
  allBookList$: Observable<any>;

  onAdd(bookId: any) {
    console.log('1', 'onadd');
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any) {
    console.log('1', 'onRemove');
    this.store.dispatch(removeBook({ bookId }));
  }

  onAddAll(bookList: any) {
    let bookLists: any = [];
    this.store.select('books').subscribe((store_books: any) => {
      bookLists = store_books.map((item: any) => {
        return item['id'];
      });
    });
    console.log(bookLists);

    this.store.dispatch(addAll({ bookList: bookLists }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<{ books: any; collection: any; addAll: any }>
  ) {
    this.books$ = store.select('books');
    this.bookCollection$ = store.select('collection');
    this.allBookList$ = store.select('addAll').pipe(
      map(() => {
        store.select('addAll');
      })
    );
    console.log('3', 'constructor', this.books$, this.bookCollection$);
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
