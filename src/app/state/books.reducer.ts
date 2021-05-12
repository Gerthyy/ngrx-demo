import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList } from './books.action';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => {
    console.log('2', 'reducer_state', state);
    console.log('2', 'reducer_coustom', [...Book]);
    return [...Book];
  })
);
