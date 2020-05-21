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

  constructor(private eRef: ElementRef, private authService:AuthService) {
    this.text = 'no clicks yet';
  }
  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.showContent=true;

    }
  }
  @ViewChild('navbar') nav;
  onClick(event) {
    
    if (!this.nav.nativeElement.contains(event.target)) {
          this.collapsed=true;
    }
  }

  
}
