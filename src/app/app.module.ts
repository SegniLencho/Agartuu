import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EresourcesComponent } from './eresources/eresources.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HidhaaDabalataaComponent } from './hidhaa-dabalataa/hidhaa-dabalataa.component';
import { MadeByGoogleComponent } from './oduu-teck/made-by-google/made-by-google.component';
import { FayyaaComponent } from './fayyaa/fayyaa.component';
import { AartiiComponent } from './Aartii/aartii/aartii/aartii.component';
import { WalooLataaComponent } from './Aartii/aartii/walaloo/waloo-lataa/waloo-lataa.component';
import { MuuziqaaComponent } from './Aartii/aartii/muuziqaa/muuziqaa/muuziqaa.component';
import { TeslaCybertruckComponent } from './oduu-teck/tesla-cybertruck/tesla-cybertruck.component';
import { BosonDynamicsComponent } from './oduu-teck/boson-dynamics/boson-dynamics.component';
import { MaashinaMeeshaQillensarattiFannisuComponent } from './oduu-teck/maashina-meesha-qillensaratti-fannisu/maashina-meesha-qillensaratti-fannisu.component';
import { IphoneWarqiirraaHojjetameComponent } from './oduu-teck/iphone-warqiirraa-hojjetame/iphone-warqiirraa-hojjetame.component';
import { GabaaComponent } from './gabaa/gabaa/gabaa.component';
import { UffataAadaaComponent } from './gabaa/uffata-aadaa/uffata-aadaa.component';
import { ElectronicsComponent } from './gabaa/electronics/electronics.component';
import { OtherItemsComponent } from './gabaa/other-items/other-items.component';
import { FilmComponent } from './Aartii/aartii/film/film.component';
import { DhiigniKeenyaTokkumaComponent } from './Aartii/aartii/walaloo/waloo-lataa/dhiigni-keenya-tokkuma/dhiigni-keenya-tokkuma.component';
import { DubadhuMaaliifJettuComponent } from './Aartii/aartii/walaloo/waloo-lataa/dubadhu-maaliif-jettu/dubadhu-maaliif-jettu.component';
import { GowwaanComponent } from './Aartii/aartii/walaloo/waloo-lataa/gowwaan/gowwaan.component';
import { KanMiidheEenyuuComponent } from './Aartii/aartii/walaloo/waloo-lataa/kan-miidhe-eenyuu/kan-miidhe-eenyuu.component';
import { SeenaaComponent } from './gabaa/books/seenaa/seenaa.component';
import { AsoosamaComponent } from './gabaa/books/asoosama/asoosama.component';
import { WalalooComponent } from './gabaa/books/walaloo/walaloo.component';
import { SiyaasaComponent } from './gabaa/books/siyaasa/siyaasa.component';
import { IjoolleeComponent } from './gabaa/books/ijoollee/ijoollee.component';
import { BooksComponent } from './gabaa/books 2/books.component';
import { GabaaLandingComponent } from './gabaa/gabaa-landing/gabaa-landing.component';
import { KitaabaLandingComponent } from './gabaa/books/kitaaba-landing/kitaaba-landing.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DubartiiUlfaaComponent } from './fayyaa/dubartii-ulfaa/dubartii-ulfaa.component';
import { GaaffiifDeebiiCoronaComponent } from './fayyaa/gaaffiif-deebii-corona/gaaffiif-deebii-corona.component';
import { ReusableCommentComponent } from './reusable-component/reusable-comment/reusable-comment/reusable-comment.component';
import { NavBarDirective } from './nav-bar.directive';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './gabaa/book/book.component';
import { CheckoutComponent } from './gabaa/checkout/checkout.component';
import { ShippingAddressComponent } from './gabaa/shipping-address/shipping-address.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SiyaasaLandingComponent } from './siyaasa/siyaasa-landing/siyaasa-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponentComponent,
    AboutComponent,
    ErrorPageComponent,
    EresourcesComponent,
    HidhaaDabalataaComponent,
    MadeByGoogleComponent,
    FayyaaComponent,
    AartiiComponent,
    WalooLataaComponent,
    MuuziqaaComponent,
    TeslaCybertruckComponent,
    BosonDynamicsComponent,
    MaashinaMeeshaQillensarattiFannisuComponent,
    IphoneWarqiirraaHojjetameComponent,
    GabaaComponent,
    UffataAadaaComponent,
    BooksComponent,
    ElectronicsComponent,
    OtherItemsComponent,
    FilmComponent,
    DhiigniKeenyaTokkumaComponent,
    DubadhuMaaliifJettuComponent,
    GowwaanComponent,
    KanMiidheEenyuuComponent,
    SeenaaComponent,
    WalooLataaComponent,
    SeenaaComponent,
    AsoosamaComponent,
    WalalooComponent,
    SiyaasaComponent,
    IjoolleeComponent,
    GabaaLandingComponent,
    KitaabaLandingComponent,
    PlaylistComponent,
    DubartiiUlfaaComponent,
    GaaffiifDeebiiCoronaComponent,
    ReusableCommentComponent,
    NavBarDirective,
    SignupComponent,
    SigninComponent,
    AdminComponent,
    BookComponent,
    CheckoutComponent,
    ShippingAddressComponent,
    SiyaasaLandingComponent,
    
],
  imports: [
    
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ToastrModule .forRoot(),
    GooglePlaceModule,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
