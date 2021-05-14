import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent implements OnInit {
  constructor() {}
  @Input() books: Array<Book> = [];
  @Output() remove = new EventEmitter();
  ngOnInit(): void {}
}
