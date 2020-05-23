export class Book {
    public title: string
    public author: string
    public price: number
    public bookId: string
    public image: string
    public description: string

    public constructor(title: string,
        author: string,
        price: number,
        bookId: string,
        image: string, description: string) {
        this.author = author
        this.title = title
        this.price = price
        this.bookId = bookId
        this.image = image
        this.description = description;

    }

}