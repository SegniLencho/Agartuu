import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
import { MetaTagService } from '../services/MetaTagService/meta-tag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerTitle: string = "Agartuu";
  ourService: string = "Tajaajila";
  ourValue: string = "Kaka'umsa";
  ourMission: string = "Xiyyeefanno ";
  ourVision: string ="Mul'ata ";

  constructor(private metaTag: Meta,private metaTagService: MetaTagService) { 
    metaTag.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });

  }

  ngOnInit() {
    AOS.init();
    this.metaTag.addTags([
      { property: "og:type", content: "Agartuu" },
     { property: "og:site_name", content: "Agartuu" },
     { property: "og:title", content: "Wiirtuu Agartuu - Agartuu"},
     { property: "og:image", content: "https://www.Agartuu.com/assets/MyLogo.png"},
     { property: "og:description", content: "Agartuu marsariitii (Website) odeeffannoo wayitawaa teekinoloojii waliin walqabate garaagaraa wallitti funanu fi qindeessuun afaan oromootti hiikuun ummata oromoof dhiheessuudha."},
     { property: "og:url", content: "https://www.Agartuu.com/wiirtuu"}
   ]);
  }
  ngOnDestroy() {
    this.metaTagService.removeMetaTags(this.metaTag);
  }
}


