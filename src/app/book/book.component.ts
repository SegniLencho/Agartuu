import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { CartService } from '../services/cart/cart.service';
import { AlertServicesService } from '../services/alert-services.service';
import { subscribeOn, filter } from 'rxjs/operators';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { ItemsForsaleService } from '../services/items-forsale.service';

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
    if (localStorage.getItem('itemOnCart') != null && localStorage.getItem('itemOnCart') != undefined && localStorage.getItem('itemOnCart') != '') {
      this.showCheckoutButton = true;
    }
  }

  addToCart(item:Book) {
    this.cartService.addItemsToShoppingCart(item);
    this.alertService.showSuccess('Gaarii keessa kaayameera', item.title)
    this.router.navigate(['/checkout'])

  }
  checkoutClicked() {
    localStorage.removeItem('itemOnCart');

  }
  ngOnDestroy() {

  }


}
