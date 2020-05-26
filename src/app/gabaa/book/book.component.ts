import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { CartService } from '../../services/cart/cart.service';
import { AlertServicesService } from '../../services/alert-services.service';
import { Router } from '@angular/router';
import { ItemsForsaleService } from '../../services/items-forsale.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books;

  showCheckoutButton: boolean = false;
  constructor(private cartService: CartService, private itemForSaleService: ItemsForsaleService, private alertService: AlertServicesService, private router: Router) {

  }

  ngOnInit(): void {
    this.books = this.itemForSaleService.getbooks();
  }

  addToCart(item: Book) {

    this.cartService.addItemsToShoppingCart(item);
    localStorage.setItem('itemQuantity', '1');
    localStorage.setItem('totalCost', item.price.toString())
    //set cart is Empty? to false
    this.cartService.updateCartStatus(false);
    this.cartService.setQuantityOfItemOnCart(1);
    this.router.navigate(['/checkout']);
  }

  ngOnDestroy() {

  }


}
