import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    DetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatTabsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 80,
      outerStrokeWidth: 8,
      innerStrokeWidth: 0,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      titleColor:"#ffffff",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
