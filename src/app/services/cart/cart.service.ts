import { Injectable } from '@angular/core';
import { Book } from 'src/app/model/book';
interface itemOnCart {

}
@Injectable({
  providedIn: 'root'
})
export class CartService {
   iscartEmpty: boolean = true;
  constructor() { }

  addItemsToShoppingCart(itemId: Book) {
    localStorage.setItem('itemOnCart', itemId.bookId);
  }
  cartIsEmpty() {
    if (localStorage != null && localStorage != undefined && localStorage.length != 0  && localStorage.getItem('itemOnCart') !=null &&localStorage.getItem('itemOnCart') !=undefined){
      this.iscartEmpty = false;
      return this.iscartEmpty;
    }
    return this.iscartEmpty;
  }


}

