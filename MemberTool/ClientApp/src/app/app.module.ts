import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { CardRevealDirective } from './shared/directives/card-reveal.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonFilterPipe} from './shared/pipes/personFilter.pipe';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import {AppRoutingModule} from './app-routing.module';
import {PersonService} from './shared/services/person.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardCarouselComponent,
    CardRevealDirective,
    PersonFilterPipe,
    FooterComponent,
    CardGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
