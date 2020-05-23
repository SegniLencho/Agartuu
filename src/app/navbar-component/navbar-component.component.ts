import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { AuthService } from '../services/authservice/auth.service';

@Component({
  selector: 'app-navbar-component',
  host: {
    //Get document click events
    '(document:click)': 'onClick($event)',
  },
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  collapsed = true;
  public text: String;
  showContent = false;
  showShoppingCart = false;
  itemQuantity ='1'
  constructor(private eRef: ElementRef, private authService: AuthService) {
    this.text = 'no clicks yet';
  }
  ngOnInit() {
    this.itemQuantity= localStorage.getItem('itemQuantity');
    // if(this.authService.isLoggedIn){
    //   this.showContent=true;
    // }
    if (localStorage.getItem('itemOnCart') != null && localStorage.getItem('itemOnCart') != undefined && localStorage.getItem('itemOnCart') != '') {
      this.showShoppingCart = true;
    }
  }
  @ViewChild('navbar') nav;
  onClick(event) {

    if (!this.nav.nativeElement.contains(event.target)) {
      this.collapsed = true;
    }
  }


}
