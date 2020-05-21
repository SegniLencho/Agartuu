import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/services/MetaTagService/meta-tag.service';

@Component({
  selector: 'app-gabaa-landing',
  templateUrl: './gabaa-landing.component.html',
  styleUrls: ['./gabaa-landing.component.css']
})
export class GabaaLandingComponent implements OnInit {

  constructor(private metaTag:Meta,private MetaTagService:MetaTagService) { }
  ngOnInit() {
    this.metaTag.addTags([
      { property: "og:site_name", content: "Agartuu" },
      { property: "og:title", content: "Gabaa Oromoo -Agartuu" },
      { property: "og:image", content: "https://www.Agartuu.com/assets/gabaa/Uffata-Aadaa/gabaa-Meta-image.png" },
      { property: "og:description", content: "Gabaa Meesha Oromoo hunda itti argattan Kitaaba , Uffata Aadaa fi MeeshaaLe Aadaa Oromoo " },
      { property: "og:url", content: "https://www.Agartuu.com/gabaa" }
    ]);
  }
  ngOnDestroy() {
    this.MetaTagService.removeMetaTags(this.metaTag);
  }

}
