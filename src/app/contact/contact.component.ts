import { AlertServicesService } from './../services/alert-services.service';
import { CommentServiceService } from './../services/comment-service.service';
import { UserComment } from './../model/user-comment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  createCommentUrl = 'https://segni-cloud-274217.uc.r.appspot.com/afroteck/createComment';
  getCommentUrl = 'https://segni-cloud-274217.uc.r.appspot.com/afroteck/getCustomerComment';

  @ViewChild('myform', { static: true }) formValues;

  public  userComment = new UserComment('', '', '');
  public userComments=null;
  constructor(private commentService: CommentServiceService, private alertServices: AlertServicesService, private metaTag: Meta) {
    metaTag.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });

   }


  ngOnInit() {
    this.commentService.getCustomerComment(this.getCommentUrl)
    .subscribe(data => this.userComments = data
    );

    this.metaTag.addTags([
      { property: "og:type", content: "Agartuu" },
     { property: "og:site_name", content: "Agartuu" },
     { property: "og:title", content: "Agartuu - Aartii "},
     { property: "og:image", content: "https://www.agartuu.com/assets/MyLogo.png"},
     { property: "og:description", content: "Agartuu quunnama "},
     { property: "og:url", content: "https://www.agartuu.com/nuquunnamaa"}
   ]);
  

  }
  onSubmit() {
    this.commentService.createComment(this.createCommentUrl,this.userComment)
      .subscribe(data => this.userComments = data );
      this.alertServices.showSuccess('Nu qaaqqabeera', 'Yaada Keessaniif Guddaa Galatoomaa');
      console.log('Inputed Data', this.userComment)
      this.formValues.resetForm();
  }

}