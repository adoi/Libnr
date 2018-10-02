import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddBook } from '../../../actions/book.action';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addBook(id: number, title: string, description: string, author: string, pages: number) {
    this.store.dispatch(new AddBook({
      id: id,
      title: title,
      description: description,
      author: author,
      pages: pages
    }));
  }
}
