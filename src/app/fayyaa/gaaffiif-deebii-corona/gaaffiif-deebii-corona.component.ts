import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/services/MetaTagService/meta-tag.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentServiceService } from 'src/app/services/comment-service.service';
import { UserComment } from 'src/app/model/user-comment';
import { AlertServicesService } from 'src/app/services/alert-services.service';

@Component({
  selector: 'app-gaaffiif-deebii-corona',
  templateUrl: './gaaffiif-deebii-corona.component.html',
  styleUrls: ['./gaaffiif-deebii-corona.component.css']
})
export class GaaffiifDeebiiCoronaComponent implements OnInit {
  public userComment = new UserComment('', '', '');
  public userComments = null;
  // LocalTest
  // createCommentUrl = 'http://localhost:8081/Agartuu/fayyaa/createFayyaaComment';
  // getCommentUrl = 'http://localhost:8081/Agartuu/fayyaa/getFayyaaCustomerComment';
  createCommentUrl = 'https://segni-cloud-274217.uc.r.appspot.com/Agartuu/fayyaa/createFayyaaComment';
  getCommentUrl = 'https://segni-cloud-274217.uc.r.appspot.com/Agartuu/fayyaa/getFayyaaCustomerComment';
  
  commentFormGroup: FormGroup;


  constructor(private metaTag: Meta, private metaTagService: MetaTagService, private alertService: AlertServicesService, private formBuilder: FormBuilder, private commentService: CommentServiceService) {
    this.commentFormGroup = this.formBuilder.group({
      commentForm: []
    });
  }

  ngOnInit(): void {
    this.collectCustomerComment();
    this.metaTag.addTags([
      { property: "og:site_name", content: "Agartuu" },
      { property: "og:title", content: "Namni Vaayirasii Kooronaan qabame hundi ni du'aa?" },
      { property: "og:image", content: "https://www.agartuu.com/assets/fayyaa/corona-hundatu.jpg" },
      { property: "og:description", content: "Deebi'ii gaaffiiwwan vaayirasii kooroonaa waliin walqabatanii ka'aniif" },
      { property: "og:url", content: "https://www.agartuu.com/fayyaa/odeefannoo-dabalataa-corona" }
    ]);
  }

  collectCustomerComment() {
    this.commentService.getCustomerComment(this.getCommentUrl)
      .subscribe(data => this.userComments = data
      );

  }
  ngOnDestroy() {
    this.metaTagService.removeMetaTags(this.metaTag);
  }
  submit() {
    let response = this.commentFormGroup.get('commentForm').value
    this.userComment = new UserComment(response.maqaa, response.email, response.yaada)
    this.commentService.createComment(this.createCommentUrl, this.userComment)
      .subscribe(data => this.userComments = data);
    this.alertService.showSuccess('Nu qaaqqabeera', 'Yaada Keessaniif Guddaa Galatoomaa');
    console.log('Comment Details-- ', this.userComment);
    this.resetForm();

  }

  resetForm() {
    this.commentFormGroup.reset();
  }

}
