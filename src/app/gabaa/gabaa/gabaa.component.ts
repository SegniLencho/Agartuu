import { Component, OnInit } from '@angular/core';
import { AlertServicesService } from '../../services/alert-services.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gabaa',
  templateUrl: './gabaa.component.html',
  styleUrls: ['./gabaa.component.css']
})
export class GabaaComponent implements OnInit {
  constructor(private alert: AlertServicesService, private metaTag: Meta) {
    metaTag.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });

   }


  ngOnInit() {
    this.metaTag.addTags([
      { property: "og:type", content: "Agartuu" },
     { property: "og:site_name", content: "Agartuu" },
     { property: "og:title", content: "Agartuu - Gabaa "},
     { property: "og:image", content: "https://www.agartuu.com/assets/MyLogo.png"},
     { property: "og:description", content: "Gabaa Oromoo "},
     { property: "og:url", content: "https://www.agartuu.com/gabaa"}
   ]);
  }
  onBuy() {
    this.alert.showError('Dogoggora', 'Dhiifama Ammaaf Bituu hin dandeessani');
  }
}