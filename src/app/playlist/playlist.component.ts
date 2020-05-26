import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { YoutubeServiceService } from '../services/youtube/youtube-service.service';
import { takeUntil } from 'rxjs/operators';
import { MetaTagService } from '../services/MetaTagService/meta-tag.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  videos: any[];
  isDataLoaded: boolean = true;
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youTubeService: YoutubeServiceService, private metaTag: Meta, private sanitizers: DomSanitizer, private metaTagService: MetaTagService) { }


  ngOnInit() {

    this.isDataLoaded = true;
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UCEYgUk8YSAlMxXlHfehuimA', 20)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }

      });

    this.metaTag.addTags([
      { property: "og:site_name", content: "Agartuu" },
      { property: "og:title", content: "Agartuu - Oduu Teekinooloojii " },
      { property: "og:image", content: "https://www.agartuu.com/assets/oduutech-meta.jpg" },
      { property: "og:description", content: "Oduu Teekinoolojii Afaan Oromoon qindeeffame" },
      { property: "og:url", content: "https://www.agartuu.com/oduutech" }
    ]);
  }
  getEmbedUrl(ids: string) {
    return this.sanitizers.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + ids);
  }

  ngOnDestroy() {
    this.metaTagService.removeMetaTags(this.metaTag);
  }
}

