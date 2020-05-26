import { Component, OnInit, ViewChild, HostListener, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AuthService } from '../services/authservice/auth.service';
import { CartService } from '../services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-component',
  host: {
    //Get document click events
    '(document:click)': 'onClick($event)',
  },
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit, OnDestroy {
  collapsed = true;
  public text: String;
  showContent = false;
  showShoppingCart:boolean = false;
  itemQuantity:number
  subscription: Subscription
  quantitySubscription: Subscription
  mymessage
  constructor(private eRef: ElementRef, private authService: AuthService, private changDetector: ChangeDetectorRef, private cartService: CartService) {
     this.subscription = this.cartService.getStatus().subscribe(status => this.showShoppingCart =!status)
     this.quantitySubscription= this.cartService.getQuantityOfItemOnCart().subscribe(quantity =>  this.itemQuantity = quantity)
     this.itemQuantity = this.cartService.getItemQuantityFromLocalStorage();


  }



  ngOnInit() {
//Set initial Quantity of Items 1 by default

    // if(this.authService.isLoggedIn){
    //   this.showContent=true;


    // }
    if (!this.cartService.cartIsEmpty()) {
      this.showShoppingCart = true;
      this.itemQuantity =this.cartService.getItemQuantityFromLocalStorage();

    }
  }
  @ViewChild('navbar') nav;
  onClick(event) {
    if (!this.nav.nativeElement.contains(event.target)) {
      this.collapsed = true;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.quantitySubscription.unsubscribe();
  }

}
