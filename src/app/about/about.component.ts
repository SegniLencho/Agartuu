import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  headerTitle: string = "Agartuu";
  ourService: string = "Tajaajila";
  ourValue: string = "Kaka'umsa";
  ourMission: string = "Galma ";
  ourVision: string ="Mul'ata ";
  constructor(private metaTag:Meta) {
    metaTag.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });

   }

  ngOnInit() {
    this.metaTag.addTags([
      { property: "og:type", content: "Agartuu" },
     { property: "og:site_name", content: "Agartuu" },
     { property: "og:title", content: "Fayyaa - Agartuu"},
     { property: "og:image", content: "https://www.Agartuu.com/assets/MyLogo.png"},
     { property: "og:description", content: "Waa'ee Keenya"},
     { property: "og:url", content: "https://www.Agartuu.com/waayeekeenya"}
   ]);
  }
  

}
