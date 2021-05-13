import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './books.action';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => {
    return [...Book];
  })
);
