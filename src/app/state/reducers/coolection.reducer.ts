import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from '../actions/books.action';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { book }) =>
    state.filter((item: any) => item.id !== book.id)
  ),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId.id) > -1) return state;
    return [...state, ...bookId];
  })
);
