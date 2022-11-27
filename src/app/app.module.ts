import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxSortableModule } from 'ngx-sortable'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTextComponent } from './component/card-text/card-text.component';
import { CardChoiceComponent } from './component/card-choice/card-choice.component';
import { CardDateComponent } from './component/card-date/card-date.component';
import { CardRatingComponent } from './component/card-rating/card-rating.component';
import { TestComponent } from './page/test/test.component';
import { HomeComponent } from './page/home/home.component';
import { CardNpsComponent } from './component/card-nps/card-nps.component';
import { LongPressDirective } from './directive/long-press.directive';
import { PreviewComponent } from './page/preview/preview.component';
import { TextComponent } from './component/preview/text/text.component';
import { ChoiceComponent } from './component/preview/choice/choice.component';
import { StarComponent } from './component/rating/star/star.component';
import { RatingComponent } from './component/preview/rating/rating.component';
import { DateComponent } from './component/preview/date/date.component';
import { NpsComponent } from './component/preview/nps/nps.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTextComponent,
    CardChoiceComponent,
    CardDateComponent,
    CardRatingComponent,
    TestComponent,
    HomeComponent,
    CardNpsComponent,
    LongPressDirective,
    PreviewComponent,
    TextComponent,
    ChoiceComponent,
    StarComponent,
    RatingComponent,
    DateComponent,
    NpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    UiSwitchModule,
    NgxSortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
