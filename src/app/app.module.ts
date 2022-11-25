import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTextComponent } from './component/card-text/card-text.component';
import { CardChoiceComponent } from './component/card-choice/card-choice.component';
import { CardDateComponent } from './component/card-date/card-date.component';
import { CardRatingComponent } from './component/card-rating/card-rating.component';
import { TestComponent } from './page/test/test.component';
import { HomeComponent } from './page/home/home.component';
import { CardNpsComponent } from './component/card-nps/card-nps.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTextComponent,
    CardChoiceComponent,
    CardDateComponent,
    CardRatingComponent,
    TestComponent,
    HomeComponent,
    CardNpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
