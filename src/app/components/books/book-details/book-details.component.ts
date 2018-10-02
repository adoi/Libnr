import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book.model';
import { Store } from '@ngxs/store';
import { DeleteBook } from '../../../actions/book.action';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  deleteBook(id: number): void {
    this.store.dispatch(new DeleteBook(id));
  }

}
