import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemsForsaleService } from 'src/app/services/items-forsale.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FormBuilder, FormArray, Validators, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  billingForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],

    address: this.formBuilder.group({
      street: ['', Validators.required],
      address2: ['', !Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required] }),

    payment: this.formBuilder.group({
      nameOnCard: ['', Validators.required],
      cardNumber: [''],
      exp: [''],
      cvv: [''],
      
    }),

  });


  itemQuantity = this.cartService.getItemQuantityFromLocalStorage();
  book
  thanksForShopping = false;
  disableCheckoutBtn: boolean = true;
  totalCost


  constructor(private itemsForSale: ItemsForsaleService, private router: Router, private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.totalCost = localStorage.getItem('totalCost')

    this.disableCheckoutBtn = this.cartService.cartIsEmpty();
    let bookId = localStorage.getItem('itemOnCart');
    let bookList = this.itemsForSale.getbooks();
    let indexOfBooks = bookList.map(e => e.bookId).indexOf(bookId);
    if (indexOfBooks != null && indexOfBooks != undefined) {
      let getBook = this.itemsForSale.getBookById(indexOfBooks);
      if (getBook != null && getBook != undefined) {
        this.book = getBook;
      }
    }
    if (this.cartService.getItemQuantityFromLocalStorage() == 0)
      this.itemQuantity = 0

  }
  get myForm() {

    return this.billingForm.controls;
  }


  onSubmit() {
    console.log('muy form is ', this.myForm)
    console.log(this.billingForm.value);
    localStorage.removeItem('itemQuantity')
    localStorage.removeItem('totalCost')
    localStorage.removeItem('itemOnCart')
    //SHopping cart is empty to true
    this.cartService.updateCartStatus(true);
    this.thanksForShopping = true;
  }
}
