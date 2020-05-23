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
     { property: "og:title", content: "Wiirtuu Agartuu"},
     { property: "og:image", content: "https://www.agartuu.com/assets/MyLogo.png"},
     { property: "og:description", content: "Agartuun marsariitii (Website) odeeffannoo wayitawaa teekinoloojii waliin walqabate garaagaraa wallitti funanuu fi qindeessuun ijaafi gurra uummata oromoo biraan gaha."},
     { property: "og:url", content: "https://www.agartuu.com/wiirtuu"}
   ]);
  }
  ngOnDestroy() {
    this.metaTagService.removeMetaTags(this.metaTag);
  }
}



