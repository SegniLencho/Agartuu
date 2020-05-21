import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aartii',
  templateUrl: './aartii.component.html',
  styleUrls: ['./aartii.component.css']
})
export class AartiiComponent implements OnInit {

  constructor(private metaTag:Meta) {
    metaTag.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
   }

  ngOnInit() {
    this.metaTag.addTags([
      { property: "og:type", content: "Agartuu" },
     { property: "og:site_name", content: "Agartuu" },
     { property: "og:title", content: "Agartuu -Aartii"},
     { property: "og:image", content: "https://www.agartuu.com/assets/MyLogo.png"},
     { property: "og:description", content: "Aartii Oromoo "},
     { property: "og:url", content: "https://www.agartuu.com/aartii"}
   ]);
  }

}
