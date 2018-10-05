import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Book } from '../models/book.model';
import { AddBook, DeleteBook } from '../actions/book.action';


export class BookStateModel {
    books: Book[];
}

@State<BookStateModel>({
    name: 'book',
    defaults: {
        books: [
            new Book(
                1,
                'Head First Design Patterns',
                `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit repellendus error nobis voluptatem doloremque
                molestiae enim sapiente mollitia dolores, soluta tenetur aliquid neque exercitationem esse, ut cumque accusamus vero
                quo explicabo fuga perferendis excepturi. Labore, minima distinctio repudiandae fugit laudantium consequuntur, vero
                provident, nostrum adipisci obcaecati non molestias quod incidunt reprehenderit sint eaque soluta. Vitae autem praesentium,
                unde nemo recusandae aut nobis ipsa corrupti id. Molestias magnam similique aut, perferendis impedit debitis deleniti
                quisquam quo at aliquam, consequatur sint enim reiciendis libero architecto quis. Amet fugit at quas aliquam eveniet
                quisquam quod sed ipsam officia laboriosam atque, porro magni?`,
                'Elisabeth Freeman and Kathy Sierra',
                688
            ),
            new Book(
                2,
                'Algorithms 4th Edition',
                `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit repellendus error nobis voluptatem doloremque
                molestiae enim sapiente mollitia dolores, soluta tenetur aliquid neque exercitationem esse, ut cumque accusamus vero
                quo explicabo fuga perferendis excepturi. Labore, minima distinctio repudiandae fugit laudantium consequuntur, vero
                provident, nostrum adipisci obcaecati non molestias quod incidunt reprehenderit sint eaque soluta. Vitae autem praesentium,
                unde nemo recusandae aut nobis ipsa corrupti id. Molestias magnam similique aut, perferendis impedit debitis deleniti
                quisquam quo at aliquam, consequatur sint enim reiciendis libero architecto quis. Amet fugit at quas aliquam eveniet
                quisquam quod sed ipsam officia laboriosam atque, porro magni?`,
                'Robert Sedgewick',
                976
            )
        ]
    }
})

export class BookState {

    // Get all books
    @Selector() static getBooks(state: BookStateModel) {
        return state.books;
    }

    // Add a book
    @Action(AddBook)
    add(context: StateContext<BookStateModel>, action: AddBook) {
        const state = context.getState();
        context.patchState({
            books: [...state.books, action.payload]
        });
    }

    // Delete a book
    @Action(DeleteBook)
    delete(context: StateContext<BookStateModel>, action: DeleteBook) {
        const state = context.getState();
        context.patchState({
            books: state.books.filter(({ id }) => id !== action.id)
        });
    }
}
