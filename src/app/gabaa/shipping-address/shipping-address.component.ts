import { Component, OnInit } from '@angular/core';
import { ItemsForsaleService } from 'src/app/services/items-forsale.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  itemQuantity = localStorage.getItem('itemQuantity');
  totalCost = localStorage.getItem('totalCost')
  itemOnCart
  book
  thanksForShopping =false;
  constructor(private itemsForSale: ItemsForsaleService,private router: Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem('itemOnCart');
    let bookList = this.itemsForSale.getbooks();
    let indexOfBooks = bookList.map(e => e.bookId).indexOf(bookId);
    if (indexOfBooks != null && indexOfBooks != undefined) {
      let getBook = this.itemsForSale.getBookById(indexOfBooks);
      if (getBook != null && getBook != undefined) {
        this.book = getBook;
      }
    }
    if(this.itemQuantity == null || this.itemQuantity ==undefined)
    this.itemQuantity ='0'
  
  }
  checkOut(){
    console.log('thanks for Shopping with US!')
    this.thanksForShopping=true;
    localStorage.removeItem('itemQuantity');
    localStorage.removeItem('totalCost');
    localStorage.removeItem('itemOnCart');
    this.router.navigate(['gabaa'])

  }


}
