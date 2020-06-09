import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EresourcesComponent } from './eresources/eresources.component';
import { MadeByGoogleComponent } from './oduu-teck/made-by-google/made-by-google.component';
import { TeslaCybertruckComponent } from './oduu-teck/tesla-cybertruck/tesla-cybertruck.component';
import { BosonDynamicsComponent } from './oduu-teck/boson-dynamics/boson-dynamics.component';
import { MaashinaMeeshaQillensarattiFannisuComponent } from './oduu-teck/maashina-meesha-qillensaratti-fannisu/maashina-meesha-qillensaratti-fannisu.component';
import { IphoneWarqiirraaHojjetameComponent } from './oduu-teck/iphone-warqiirraa-hojjetame/iphone-warqiirraa-hojjetame.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AartiiComponent } from './Aartii/aartii/aartii/aartii.component';
import { UffataAadaaComponent } from './gabaa/uffata-aadaa/uffata-aadaa.component';
import { FayyaaComponent } from './fayyaa/fayyaa.component';
import { OtherItemsComponent } from './gabaa/other-items/other-items.component';
import { ElectronicsComponent } from './gabaa/electronics/electronics.component';
import { AsoosamaComponent } from './gabaa/books/asoosama/asoosama.component';
import { WalalooComponent } from './gabaa/books/walaloo/walaloo.component';
import { IjoolleeComponent } from './gabaa/books/ijoollee/ijoollee.component';
import { SeenaaComponent } from './gabaa/books/seenaa/seenaa.component';
import { SiyaasaComponent } from './gabaa/books/siyaasa/siyaasa.component';
import { GabaaLandingComponent } from './gabaa/gabaa-landing/gabaa-landing.component';
import { KitaabaLandingComponent } from './gabaa/books/kitaaba-landing/kitaaba-landing.component';
import { DubartiiUlfaaComponent } from './fayyaa/dubartii-ulfaa/dubartii-ulfaa.component';
import { GaaffiifDeebiiCoronaComponent } from './fayyaa/gaaffiif-deebii-corona/gaaffiif-deebii-corona.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BookComponent } from './gabaa/book/book.component';
import { CheckoutComponent } from './gabaa/checkout/checkout.component';
import { ShippingAddressComponent } from './gabaa/shipping-address/shipping-address.component';
import { SiyaasaLandingComponent } from './siyaasa/siyaasa-landing/siyaasa-landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/wiirtuu', pathMatch: 'full' },
  { path: 'made-by-google', component: MadeByGoogleComponent },
  { path: 'tesla-cybetruck', component: TeslaCybertruckComponent },
  { path: 'boston-dynamics', component: BosonDynamicsComponent },
  { path: 'levitating-machine', component: MaashinaMeeshaQillensarattiFannisuComponent },
  { path: 'iphone-warqii', component: IphoneWarqiirraaHojjetameComponent },
  { path: 'aartii', component: AartiiComponent },
  { path: 'eresources', component: EresourcesComponent },
  { path: 'wiirtuu', component: HomeComponent },
  { path: 'waayeekeenya', component: AboutComponent },
  { path: 'gabaa', component: GabaaLandingComponent },
  { path: 'oduutech', component: IphoneWarqiirraaHojjetameComponent },
  { path: 'uffata-aadaa', component: UffataAadaaComponent },
  { path: 'fayyaa', component: FayyaaComponent },
  { path: 'meeshaa-aadaa', component: OtherItemsComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'meeshaa-aadaa', component: OtherItemsComponent },
  { path: 'asoosama', component: AsoosamaComponent },
  { path: 'walaloo', component: WalalooComponent },
  { path: 'kitaaba-ijoollee', component: IjoolleeComponent },
  { path: 'kitaaba-siyaasa', component: SiyaasaComponent },
  { path: 'seenaa', component: SeenaaComponent },
  { path: 'kitaaba', component: KitaabaLandingComponent },
  { path: 'fayyaa-dubartii-ulfaa', component: DubartiiUlfaaComponent },
  { path: 'fayyaa/odeefannoo-dabalataa-corona', component: GaaffiifDeebiiCoronaComponent },
  {path: 'siyaasa', component: SiyaasaLandingComponent},
  { path: 'galmaayi', component: SignupComponent },
  { path: 'seeni', component: SigninComponent },
  { path: 'nuquunnamaa', component: ContactComponent },
  { path: 'book', component: BookComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shipping', component: ShippingAddressComponent },



  { path: '**', component: ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
