import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemsForsaleService } from 'src/app/services/items-forsale.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CommentServiceService } from 'src/app/services/comment-service.service';


@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    checkoutUrl='http://localhost:8083/afroteck/checkOut';

  billingForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    
    payment: this.formBuilder.group({
      paymentType: ['credit_card', Validators.required],
      nameOnCard: ['', Validators.pattern('[A-Za-z ]*')],
      cardNumber: ['', Validators.pattern('[0-9]*')],
      expMonth: [''],
      expYear: [''],

      cvv: ['', Validators.pattern('[0-9]{3}')],

    }),
    address: this.formBuilder.group({
      street: ['', Validators.required],
      address2: ['', !Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    })

  });


  itemQuantity = this.cartService.getItemQuantityFromLocalStorage();
  book
  thanksForShopping = false;
  disableCheckoutBtn: boolean = true;
  totalCost


  constructor(private itemsForSale: ItemsForsaleService, private router: Router, private cartService: CartService, private formBuilder: FormBuilder,
    private commentService:CommentServiceService) { }

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
    if (this.billingForm.valid) {
      
      console.log('muy form is ',  JSON.stringify(this.billingForm.value));
this.commentService.checkOut(this.checkoutUrl, JSON.stringify(this.billingForm.value));
      localStorage.removeItem('itemQuantity')
      localStorage.removeItem('totalCost')
      localStorage.removeItem('itemOnCart')
      //SHopping cart is empty to true
      this.cartService.updateCartStatus(true);
      this.thanksForShopping = true;
    }
    else {
      this.validateAllFormFields(this.billingForm)
    }
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public handleAddressChange(address: Address) {
    this.billingForm.get('address.street').setValue(address.formatted_address)
    // this.billingForm.get('address.city').setValue(address.address_components[2].long_name)
    // this.billingForm.get('address.state').setValue(address.address_components[4].long_name)
    // this.billingForm.get('address.zip').setValue(address.address_components[6].long_name)
    // // Do some stuff

  }
}
