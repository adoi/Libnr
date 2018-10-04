import { Book } from '../models/book.model';

export class AddBook {
    static readonly type = '[Book] AddBook';

    constructor(public payload: Book) { }
}

export class DeleteBook {
    static readonly type = '[Book] DeleteBook';

    constructor(public id: number) { }
}
