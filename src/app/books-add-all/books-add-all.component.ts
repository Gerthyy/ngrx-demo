import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';
@Component({
  selector: 'app-books-add-all',
  templateUrl: './books-add-all.component.html',
  styleUrls: ['./books-add-all.component.css'],
})
export class BooksAddAllComponent implements OnInit {
  constructor() {}

  @Input() books: Array<Book> = [];
  @Output() addAll = new EventEmitter();

  ngOnInit(): void {}
}
