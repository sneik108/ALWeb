import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListItemComponent } from './components/main-page/list-item/list-item.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { DetailsComponent } from './components/main-page/details/details.component';
import {DataService} from './services/data.service';
import { FromSecsToLocaleDatePipe } from './pipes/from-secs-to-locale-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListItemComponent,
    SanitizeHtmlPipe,
    DetailsComponent,
    FromSecsToLocaleDatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    InfiniteScrollModule
  ],
  providers: [DataService, SanitizeHtmlPipe, FromSecsToLocaleDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
