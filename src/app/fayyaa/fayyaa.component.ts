import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaTagService } from '../services/MetaTagService/meta-tag.service';
import { FayyaaService } from '../services/fayyaaServices/fayyaa.service';
import { CommentServiceService } from '../services/comment-service.service';
import { UserComment } from '../model/user-comment';
import { AlertServicesService } from '../services/alert-services.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-fayyaa',
  templateUrl: './fayyaa.component.html',
  styleUrls: ['./fayyaa.component.css']
})
export class FayyaaComponent implements OnInit {
  createCommentUrl = 'https://segni-cloud-274217.uc.r.appspot.com/afroteck/fayyaa/createFayyaaComment';
  getCommentUrl = 'https://segni-cloud-274217.uc.r.appspot.com/afroteck/fayyaa/getFayyaaCustomerComment';
  // Local Test
  // createCommentUrl = 'http://localhost:8081/Agartuu/fayyaa/createFayyaaComment';
  // getCommentUrl = 'http://localhost:8081/Agartuu/fayyaa/getFayyaaCustomerComment';
  covidGlobalUrl = 'https://covid-19-data.p.rapidapi.com/totals';
  covIdEthiopia = 'https://covid-19-data.p.rapidapi.com/country?name=Ethiopia';
  covIdUsa = 'https://covid-19-data.p.rapidapi.com/country?name=Usa';
  covIdItaly = 'https://covid-19-data.p.rapidapi.com/country?name=Italy';
  covIdIChina = 'https://covid-19-data.p.rapidapi.com/country?name=China';
  covIdSpain = 'https://covid-19-data.p.rapidapi.com/country?name=spain';
  covIdGermany = 'https://covid-19-data.p.rapidapi.com/country?name=germany';
  covIdIran = 'https://covid-19-data.p.rapidapi.com/country?name=iran';
  covIdFrance = 'https://covid-19-data.p.rapidapi.com/country?name=france';
  covIdUk= 'https://covid-19-data.p.rapidapi.com/country?name=uk';

  commentFormGroup: FormGroup;


  @ViewChild('myform', { static: true }) formValues;
  public userComment = new UserComment('', '', '');
  public userComments = null;
  mainStyle = null;
  sideStyle = null;
  clickOutside: EventEmitter<MouseEvent>;
  globalData = null;
  italyData = null;
  ethiopia = null;
  usa = null;
  chinaData = null;
  spainData = null;
  germanyData = null;
  franceData = null;
  iranData = null;
  ukData=null;


  constructor(private metaTag: Meta, private metaTagService: MetaTagService, private alertService: AlertServicesService,
    private fayyaaService: FayyaaService, private commentService: CommentServiceService, private formBuilder: FormBuilder) {
    metaTag.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.commentFormGroup = this.formBuilder.group({
      commentForm: []
    });
  }
  ngOnInit() {
    this.collectCustomerComment();
    this.collectAllCovIdData();

    this.metaTag.addTags([
      { property: "og:site_name", content: "Agartuu" },
      { property: "og:title", content: "Corona irraa akkamiin of eegna? " },
      { property: "og:image", content: "https://www.agartuu.com/assets/fayyaa/corona-cover.jpg" },
      { property: "og:description", content: "Agartuu - Fayyaa " },
      { property: "og:url", content: "https://www.agartuu.com/fayyaa" }
    ]);
  }
  collectCustomerComment() {
    this.commentService.getCustomerComment(this.getCommentUrl)
      .subscribe(data => this.userComments = data
      );

  }

  public collectAllCovIdData() {
    //Global
    this.fayyaaService.getCovidData(this.covidGlobalUrl).
      subscribe(data => this.globalData = data);
    //Ethiopia
    this.fayyaaService.getCovidData(this.covIdEthiopia).
      subscribe(data => this.ethiopia = data);
    //USA
    this.fayyaaService.getCovidData(this.covIdUsa).
      subscribe(data => this.usa = data);
    //ITaly
    this.fayyaaService.getCovidData(this.covIdItaly).
      subscribe(data => this.italyData = data);

    //china
    this.fayyaaService.getCovidData(this.covIdIChina).
      subscribe(data => this.chinaData = data)

    //spain
    this.fayyaaService.getCovidData(this.covIdSpain).
      subscribe(data => this.spainData = data)

    //germany
    this.fayyaaService.getCovidData(this.covIdGermany).
      subscribe(data => this.germanyData = data)

    //iran
    this.fayyaaService.getCovidData(this.covIdIran).
      subscribe(data => this.iranData = data)


    //france
    this.fayyaaService.getCovidData(this.covIdFrance).
      subscribe(data => this.franceData = data)

    //france
    this.fayyaaService.getCovidData(this.covIdUk).
      subscribe(data => this.ukData = data)

  }
  openNav() {
    this.mainStyle = {
      width: "100%",
      height: "100%"

    }
    this.sideStyle = {
      width: "100%",
      height: "100%"

    }


  }
  closeNav() {
    this.mainStyle = {
      width: "0px",
      height: "0px"

    }
    this.sideStyle = {
      width: "0px",
      height: "0px"

    }

  }
  onClick(event: EventEmitter<MouseEvent>) {

    this.mainStyle = {
      width: "0px",
      height: "0px"

    }
    this.sideStyle = {
      width: "0px",
      height: "0px"

    }
  }

  ngOnDestroy() {
    this.metaTagService.removeMetaTags(this.metaTag);
  }
  onSubmit() {
    this.commentService.createComment(this.createCommentUrl, this.userComment)
      .subscribe(data => this.userComments = data);
    this.alertService.showSuccess('Nu qaaqqabeera', 'Yaada Keessaniif Guddaa Galatoomaa');
    console.log('Inputed Data', this.userComment)
    this.formValues.resetForm();
  }
  submit() {
    console.log(this.commentFormGroup.value);
  }

  resetForm() {
    this.commentFormGroup.reset();
  }
}

