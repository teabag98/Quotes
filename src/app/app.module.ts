import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';
import { ContactComponent } from './contact/contact.component';
import { QuoteDirective } from './quote.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteformComponent } from './quoteform/quoteform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    QuoteComponent,
    ContactComponent,
    QuoteDirective,
    QuoteDetailsComponent,
    QuoteformComponent,

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
