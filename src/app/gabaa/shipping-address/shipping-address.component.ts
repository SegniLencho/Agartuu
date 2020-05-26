import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemsForsaleService } from 'src/app/services/items-forsale.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FormBuilder, FormArray, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'


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
      paymentType: ['credit_card', Validators.required],
      nameOnCard: ['', Validators.pattern('[A-Za-z ]*')],
      cardNumber: ['',Validators.pattern('[0-9]*')],
      expMonth: [''],
      expYear: [''],

      cvv: ['',Validators.pattern('[0-9]{3}')],
      
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
    if(this.billingForm.valid){
      console.log('muy form is ', this.myForm)
    console.log(this.billingForm.value);
    localStorage.removeItem('itemQuantity')
    localStorage.removeItem('totalCost')
    localStorage.removeItem('itemOnCart')
    //SHopping cart is empty to true
    this.cartService.updateCartStatus(true);
    this.thanksForShopping = true;
    }
    else{
      this.validateAllFormFields(this.billingForm)
    }
  }
  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
}
