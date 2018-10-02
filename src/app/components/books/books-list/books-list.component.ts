import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { BookState } from '../../../state/book.state';
import { Observable } from 'rxjs';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Select(BookState.getBooks) books$: Observable<Book[]>;

  constructor() { }

  ngOnInit() {
  }

}
