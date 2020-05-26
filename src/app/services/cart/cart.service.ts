import { Injectable } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Subject, Observable } from 'rxjs';
import { stat } from 'fs';
interface itemOnCart {

}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  emptyCart: boolean = true;
  constructor() { }
  private status = new Subject<boolean>();
  private itemQuantityOnCart = new Subject<number>();

  addItemsToShoppingCart(itemId: Book) {
    localStorage.setItem('itemOnCart', itemId.bookId);
  }
  cartIsEmpty() {
    if (localStorage != null && localStorage != undefined && localStorage.length != 0 && localStorage.getItem('itemOnCart') != null && localStorage.getItem('itemOnCart') != undefined) {
      this.emptyCart = false;
      return this.emptyCart;
    }
    return this.emptyCart;
  }
  setCartToEmpty() {
    this.emptyCart = true;
  }
  getStatus(): Observable<boolean> {
    console.log('Cart Status 0 for EMPTY And 1 FOr NOT ', this.status.asObservable())
    return this.status.asObservable();

  }
  updateCartStatus(status: boolean) {
    this.status.next(status);
    console.log('status updated to ', status)
  }
  getQuantityOfItemOnCart() {
    return this.itemQuantityOnCart.asObservable();
  }
  setQuantityOfItemOnCart(quantity: number) {
    this.itemQuantityOnCart.next(quantity);
  }
  getItemQuantityFromLocalStorage() {
    if (localStorage.getItem('itemQuantity') == null || localStorage.getItem('itemQuantity') == undefined) {
      return 0;
    }
    else {
      return parseInt(localStorage.getItem('itemQuantity'));
    }
  }
}

