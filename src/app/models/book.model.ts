export class Book {
    id: number;
    title: string;
    description: string;
    author: string;
    pages: number;

    constructor(
        id?: number,
        title?: string,
        description?: string,
        author?: string,
        pages?: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.pages = pages;
    }
}
