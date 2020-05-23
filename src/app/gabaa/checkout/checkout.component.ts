import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ItemsForsaleService } from 'src/app/services/items-forsale.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authservice/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public book: Book;
  public cartIsEmpty: boolean = true;
  itemQuantity = '1'
  totalCost: any = localStorage.getItem('totalCost')
  defaultQuantity = '1'
  constructor(private itemsForSale: ItemsForsaleService,
    private authService: AuthService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.checkCartStatus();
  }

  checkout() {
    localStorage.setItem('itemQuantity', this.itemQuantity);
    localStorage.setItem('totalCost', this.totalCost)
    if (this.authService.isLoggedIn) {
      //ask user to enter shipping address 
      this.router.navigate(['/shipping'])

    }
    else {
      this.router.navigate(['/seeni'])

    }

    // this.cartIsEmpty = true;
    // localStorage.clear();
  }

  checkCartStatus() {
    this.cartIsEmpty = this.cartService.cartIsEmpty();

    if (!this.cartIsEmpty) {
      if (localStorage.getItem('itemOnCart') != null && localStorage.getItem('itemOnCart') != undefined) {
        let bookId = localStorage.getItem('itemOnCart');
        let bookList = this.itemsForSale.getbooks();
        let indexOfBooks = bookList.map(e => e.bookId).indexOf(bookId);
        if (indexOfBooks != null && indexOfBooks != undefined) {
          let getBook = this.itemsForSale.getBookById(indexOfBooks);
          if (getBook != null && getBook != undefined) {
            this.book = getBook;
          }

        }
      }
      if (this.totalCost == undefined || this.totalCost == null)
        this.totalCost = this.book.price;
      if (localStorage.getItem('itemQuantity') != null) {
        this.defaultQuantity = localStorage.getItem('itemQuantity')
        this.itemQuantity=this.defaultQuantity;
      }

    }

  }
  valueChanged(value) {

    this.totalCost = value * this.book.price;
    this.itemQuantity = value;
    localStorage.setItem('itemQuantity', value);
    localStorage.setItem('totalCost', this.totalCost)
    location.reload();
  }
}
