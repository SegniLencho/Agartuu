import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  constructor() {
  }
  removeMetaTags(metaTag: Meta) {
    metaTag.removeTag("property='og:title'");
    metaTag.removeTag("property='og:site_name'");
    metaTag.removeTag("property='og:url'");
    metaTag.removeTag("property='og:description'");
    metaTag.removeTag("property='og:image'");
  }
}
