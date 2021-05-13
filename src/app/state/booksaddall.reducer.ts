import { createReducer, on, Action } from '@ngrx/store';

import { addAll } from './books.action';
import { Book } from '../book-list/books.model';

export const initialState: any = [];

export const addAllReducer = createReducer(
  initialState,
  on(addAll, (state, { bookList }) => {
    if (state.length <= 0) return [...bookList];
    return [];
  })
);
