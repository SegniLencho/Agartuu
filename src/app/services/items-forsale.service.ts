import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class ItemsForsaleService {
  books = Array<Book>();

  constructor() {
    let book1 = new Book('Eenyu Siinjedhu', 'Sanyii Leencoo', 20, 'book1', 'https://www.agartuu.com/assets/gabaa/kitaaba/kitaaba.jpg', 'Kitaaba baareedaa namni hunduu dubbisuu qabu');
    let book2 = new Book('Maal Kolfa dhaloonni', 'Laataa Qanaii', 20, 'book2', 'https://www.agartuu.com/assets/gabaa/kitaaba/kitaaba.jpg', 'Walaloo baareedaa namni hunduu dubbisuu qabu');
    let book3 = new Book('Miila Kaayyoo ', 'Laataa Qanaii', 20, 'book3', 'https://www.agartuu.com/assets/gabaa/kitaaba/kitaaba.jpg', 'Miilaa Kaayyoo akkamiin dheeeressuu dubbisuu qabu');
    this.books.push(book1, book2, book3);
  }

  getbooks() {
    return this.books;
  }
  getBookById(id: number) {
    return this.books[id];
  }
}
