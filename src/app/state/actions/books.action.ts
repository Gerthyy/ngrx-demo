import { createAction, props } from '@ngrx/store';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: any | undefined }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ book: any | undefined }>()
);

export const addAll = createAction(
  '[Book List] Add all Book',
  props<{ bookList: any | undefined }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ Book: any | undefined }>()
);
