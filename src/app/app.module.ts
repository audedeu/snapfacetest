import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';


import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingpageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    PickerModule,
   AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {constructor () {
  registerLocaleData(fr.default);
}
 }
